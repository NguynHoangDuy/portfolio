"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    period: "03/2023 — 03/2026",
    role: "Software Engineer",
    company: "Screen 1 Technology",
    location: "Nha Trang, Vietnam",
    description:
      "Developed responsive UIs with React.js, designed and built RESTful APIs with Node.js and PostgreSQL. Optimized system performance with Redis caching and RabbitMQ async processing. Worked with Google Cloud BigQuery and AWS (Lambda, SQS, S3, DynamoDB).",
    tags: ["REACT.JS", "NODE.JS", "POSTGRESQL", "REDIS", "RABBITMQ", "AWS", "BIGQUERY"],
  },
];

const education = [
  {
    period: "09/2019 — 09/2023",
    degree: "Bachelor's in Information Technology",
    school: "Nha Trang University",
    gpa: "GPA: 7.79 / 10",
  },
];

export function Experience() {
  return (
    <section id="stack" className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <motion.p
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Background
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Work */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-muted text-xs font-bold tracking-widest uppercase mb-6">
              <Briefcase size={14} className="text-primary" /> Work
            </div>

            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="bg-background border border-border-base rounded-xl p-6 hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary text-sm font-semibold">{exp.company}</p>
                    <p className="text-muted text-xs mt-0.5">{exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-muted bg-surface-2 border border-border-base px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-2 text-muted border border-border-base tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted text-xs font-bold tracking-widest uppercase mb-6">
              <GraduationCap size={14} className="text-primary" /> Education
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-background border border-border-base rounded-xl p-6 hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-xs font-mono text-muted bg-surface-2 border border-border-base px-3 py-1 rounded-full">
                  {edu.period}
                </span>
                <h3 className="text-sm font-bold text-foreground mt-3 mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-semibold">{edu.school}</p>
                <p className="text-muted text-xs mt-2">{edu.gpa}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
