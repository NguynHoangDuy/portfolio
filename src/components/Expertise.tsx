"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Frontend",
    description: "Responsive, user-friendly UIs with React.js, HTML, and CSS across all devices.",
    icon: Code2,
    stack: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    description: "RESTful APIs with Node.js (Express.js) and Knex.js, integrated with PostgreSQL.",
    icon: Server,
    stack: ["Node.js", "Express.js", "Knex.js", "PostgreSQL"],
  },
  {
    title: "Cloud & Data",
    description: "AWS (Lambda, SQS, S3, DynamoDB, API Gateway) and Google Cloud BigQuery at scale.",
    icon: Cloud,
    stack: ["AWS Lambda", "S3", "DynamoDB", "BigQuery"],
  },
  {
    title: "Performance",
    description: "System optimization with Redis caching and RabbitMQ async processing under high load.",
    icon: Zap,
    stack: ["Redis", "RabbitMQ", "Caching", "Queues"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function Expertise() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.p
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={item}
                className="group bg-background border border-border-base rounded-xl p-6 cursor-default"
                whileHover={{ y: -4, boxShadow: "0 12px 32px -8px rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-base font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.stack.map((s, i) => (
                    <motion.span
                      key={s}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-surface-2 text-muted border border-border-base"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
