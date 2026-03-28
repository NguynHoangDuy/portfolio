"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ListenLayer",
    subtitle: "User Behavior Analytics Platform",
    period: "05/2023 — 03/2026",
    logo: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/listenlayer-logo.svg`,
    url: "https://listenlayer.com",
    description:
      "Large-scale platform at Screen 1 Technology that helps marketers manage and standardize marketing data, eliminate data inconsistencies, and connect data to revenue.",
    bullets: [
      "Developed responsive UI with React.js across multiple devices",
      "Built RESTful APIs with Node.js and PostgreSQL",
      "Real-time data collection and processing pipelines",
      "Performance optimization with Redis caching and RabbitMQ",
      "Large-scale data processing with BigQuery",
      "Serverless workflows with Cloud Functions and AWS Lambda",
    ],
    tags: ["REACT.JS", "NODE.JS", "BIGQUERY", "POSTGRESQL", "REDIS", "AWS LAMBDA", "CLOUD FUNCTIONS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <motion.p
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Projects
          </motion.h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-2xl border border-border-base overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ boxShadow: "0 16px 48px -12px rgba(59,130,246,0.15)" }}
            >
              {/* Browser bar */}
              <div className="bg-surface-2 border-b border-border-base px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {["bg-red-400/80", "bg-yellow-400/80", "bg-green-400/80"].map((c, i) => (
                      <motion.div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${c}`}
                        whileHover={{ scale: 1.4 }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-muted hidden sm:block">listenlayer.com</span>
                </div>
                <span className="font-mono text-xs text-muted">{project.period}</span>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Left panel */}
                <div className="lg:col-span-2 bg-surface border-b lg:border-b-0 lg:border-r border-border-base p-8 flex flex-col justify-between gap-8">
                  <div>
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-7 mb-5 dark:brightness-0 dark:invert dark:opacity-80"
                    />
                    <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{project.subtitle}</p>
                    <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary hover:text-primary-dark transition-colors self-start"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <ExternalLink size={13} /> VISIT SITE
                  </motion.a>
                </div>

                {/* Right panel */}
                <div className="lg:col-span-3 bg-background p-8 flex flex-col justify-between gap-8">
                  <motion.ul
                    className="space-y-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                  >
                    {project.bullets.map((b) => (
                      <motion.li
                        key={b}
                        className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-2.5 py-1 bg-surface-2 border border-border-base text-muted rounded-md text-[10px] font-bold tracking-widest cursor-default"
                        variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                        whileHover={{ scale: 1.08, borderColor: "rgba(59,130,246,0.5)", color: "var(--primary)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
