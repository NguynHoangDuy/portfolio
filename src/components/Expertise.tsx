"use client";

import { motion } from "framer-motion";
import { Code2, Network, Cloud, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Frontend",
    description: "Building responsive, user-friendly interfaces with React.js, HTML, and CSS across all devices.",
    icon: Code2,
  },
  {
    title: "Backend",
    description: "Designing and developing RESTful APIs with Node.js (Express.js) and Knex.js, integrated with PostgreSQL.",
    icon: Network,
  },
  {
    title: "Cloud & Data",
    description: "Working with AWS (Lambda, SQS, S3, DynamoDB, API Gateway) and Google Cloud (BigQuery) for data processing at scale.",
    icon: Cloud,
  },
  {
    title: "Performance",
    description: "Optimizing systems with Redis caching and RabbitMQ async processing for stability under high load.",
    icon: Zap,
  },
];

export function Expertise() {
  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
