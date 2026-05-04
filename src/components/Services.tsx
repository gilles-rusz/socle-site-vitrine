"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  Search,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  Search,
  Wrench,
};

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-dark-500 max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-dark-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
