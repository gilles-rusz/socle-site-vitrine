import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 bg-dark-900 text-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">{siteConfig.footer.copyright}</p>
          <div className="flex gap-6">
            {siteConfig.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
