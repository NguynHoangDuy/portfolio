"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ListenLayer",
    subtitle: "User Behavior Analytics Platform",
    period: "05/2023 — 03/2026",
    logo: "/portfolio/listenlayer-logo.svg",
    url: "https://listenlayer.com",
    description: "Large-scale platform at Screen 1 Technology that helps marketers manage and standardize marketing data, eliminate data inconsistencies, and connect data to revenue. Developed responsive UI with React.js, built RESTful APIs with Node.js, implemented real-time data collection and processing, optimized performance with Redis caching and async queue services, and processed large-scale data using BigQuery and PostgreSQL. Developed serverless data pipelines with Cloud Functions and AWS Lambda.",
    tags: ["REACT.JS", "NODE.JS", "BIGQUERY", "POSTGRESQL", "REDIS", "AWS LAMBDA", "CLOUD FUNCTIONS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span 
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Portfolio Gallery
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            SELECTED<br />PROJECTS
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated selection of digital structures, built with architectural precision and high-performance engineering.
          </motion.p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`flex flex-col gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image / Visual side */}
              <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-2xl bg-white border border-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                {"logo" in project && (
                  <img
                    src={(project as { logo: string }).logo}
                    alt={project.title}
                    className="relative z-10 w-2/3 max-w-xs"
                  />
                )}
              </div>

              {/* Content side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{project.title}</h3>
                {"subtitle" in project && <p className="text-primary font-semibold text-sm mb-1">{(project as {subtitle: string}).subtitle}</p>}
                {"period" in project && <p className="text-gray-400 text-xs tracking-widest mb-4">{(project as {period: string}).period}</p>}
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {project.description}
                </p>
                {"url" in project && (
                  <a
                    href={(project as { url: string }).url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-primary font-bold tracking-widest text-sm hover:text-primary-dark transition-colors flex items-center gap-2 group"
                  >
                    VISIT SITE
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
