"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-dark-900 leading-tight">
            {hero.title}{" "}
            <span className="text-primary-600">{hero.highlight}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-dark-500 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={hero.ctaHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
          >
            {hero.cta}
            <ArrowRight size={18} />
          </a>
          <a
            href={hero.secondaryCtaHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-dark-200 text-dark-700 font-semibold hover:border-primary-300 hover:text-primary-700 transition-colors"
          >
            {hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
