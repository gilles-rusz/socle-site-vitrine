import { NextResponse } from "next/server";

// Rate limiting en mémoire (simple, adapté pour Vercel serverless)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max 5 requêtes
const RATE_WINDOW = 60 * 1000; // par minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans une minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    if (name.length > 200 || subject.length > 500 || message.length > 5000) {
      return NextResponse.json(
        { error: "Un ou plusieurs champs dépassent la taille maximale." },
        { status: 400 }
      );
    }

    // ============================================================
    // OPTION 1 : Formspree (recommandé pour commencer)
    // Créez un formulaire sur https://formspree.io et ajoutez
    // FORMSPREE_ENDPOINT dans vos variables d'environnement
    // ============================================================
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Non renseigné",
          subject,
          message,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Erreur lors de l'envoi du message." },
          { status: 500 }
        );
      }
    }

    // ============================================================
    // OPTION 2 : Nodemailer (SMTP)
    // Décommentez et configurez si vous préférez l'envoi SMTP direct
    // npm install nodemailer
    // ============================================================
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `[Contact Site] ${subject}`,
    //   html: `
    //     <h2>Nouveau message de contact</h2>
    //     <p><strong>Nom :</strong> ${name}</p>
    //     <p><strong>Email :</strong> ${email}</p>
    //     <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
    //     <p><strong>Sujet :</strong> ${subject}</p>
    //     <p><strong>Message :</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès !",
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
