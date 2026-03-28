"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "03/2023 — 03/2026",
    role: "Software Engineer",
    company: "Screen 1 Technology — Nha Trang, Vietnam",
    description: "Developed responsive UIs with React.js, HTML and CSS across multiple devices. Designed and built RESTful APIs with Node.js integrated with PostgreSQL. Optimized system performance using Redis (caching) and RabbitMQ (async processing). Worked with cloud services including Google Cloud BigQuery and AWS (Lambda, SQS, S3, DynamoDB).",
    tags: ["REACT.JS", "NODE.JS", "POSTGRESQL", "REDIS", "RABBITMQ", "AWS", "BIGQUERY"],
  },
];

export function Experience() {
  return (
    <section id="stack" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              EXPERIENCE.
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Engineering sophisticated digital architectures with precision and editorial intent.
            </motion.p>
          </div>
          <motion.div 
            className="w-full md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-2 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "70%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.role}
              className="flex flex-col md:flex-row gap-6 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="md:w-1/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{exp.role}</h3>
                {"company" in exp && <p className="text-gray-500 text-sm mt-1">{(exp as {company: string}).company}</p>}
              </div>
              <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-3xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
