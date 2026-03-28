"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ListenLayer",
    subtitle: "User Behavior Analytics Platform",
    period: "05/2023 — 03/2026",
    logo: "/portfolio/listenlayer-logo.svg",
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
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.span
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            SELECTED<br />PROJECTS
          </motion.h2>
        </div>

        {/* Project cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Top bar */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-gray-500 font-mono text-xs tracking-wider hidden sm:block">
                    listenlayer.com
                  </span>
                </div>
                <span className="text-gray-600 font-mono text-xs tracking-widest">
                  {project.period}
                </span>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-5">

                {/* Left — logo + meta */}
                <div className="lg:col-span-2 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100 p-10 flex flex-col justify-between gap-8">
                  <div>
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-8 mb-6"
                    />
                    <p className="text-primary text-sm font-semibold mb-1">{project.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-sm mt-4">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary hover:text-primary-dark transition-colors group self-start"
                  >
                    VISIT SITE
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Right — bullets + stack */}
                <div className="lg:col-span-3 p-10 flex flex-col justify-between gap-8">
                  <ul className="space-y-3">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
