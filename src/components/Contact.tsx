"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dots bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-dark-900">Email</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-dark-500 hover:text-primary-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-dark-900">Téléphone</div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-dark-500 hover:text-primary-600 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-dark-900">Adresse</div>
                <p className="text-dark-500">{siteConfig.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-white border border-primary-200 text-center">
                <CheckCircle className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-dark-900 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-dark-500">
                  Merci, nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 rounded-2xl bg-white border border-dark-100 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      {contact.formFields.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 text-dark-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      {contact.formFields.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 text-dark-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      {contact.formFields.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 text-dark-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-dark-700 mb-1"
                    >
                      {contact.formFields.subject} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 text-dark-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-700 mb-1"
                  >
                    {contact.formFields.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 text-dark-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter
                    directement par email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 disabled:opacity-60 transition-colors"
                >
                  <Send size={18} />
                  {status === "sending"
                    ? "Envoi en cours..."
                    : contact.formFields.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
