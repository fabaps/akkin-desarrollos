"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Settings,
  Handshake,
  TrendingUp,
  BarChart3,
  Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function FinanzasContent() {
  const { t } = useI18n();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  const services = [
    {
      title: t("services.finances.content.item1"),
      icon: <BarChart3 className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.item2"),
      icon: <TrendingUp className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.item3"),
      icon: <Handshake className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.item4"),
      icon: <Settings className="h-5 w-5 text-solar-500" />,
    },
    {
      title: t("services.finances.content.aliance"),
      icon: <Users className="h-5 w-5 text-solar-500" />,
    },
  ];

  return (
    <section ref={containerRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="lg:text-4xl text-xl text-solar-400 font-medium">
            {t("services.finances.content.title")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center p-6 rounded-xl bg-oxford-700/30 backdrop-blur-sm border border-oxford-600/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-2 rounded-lg bg-oxford-600/50 mr-4">
                {service.icon}
              </div>
              <span className="text-oxford-100 font-medium">
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

