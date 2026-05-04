"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section id="temoignages" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-dark-50 border border-dark-100"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>

              <p className="text-dark-600 leading-relaxed mb-6">
                &ldquo;{item.content}&rdquo;
              </p>

              <div>
                <div className="font-semibold text-dark-900">{item.name}</div>
                <div className="text-sm text-dark-400">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
