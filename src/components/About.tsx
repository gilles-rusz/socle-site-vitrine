"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="apropos" className="py-24 sm:py-32 bg-dots bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200 mb-4">
              {about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-6">
              {about.headline}
            </h2>
            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-dark-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-6">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-sm border border-dark-100"
                >
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
