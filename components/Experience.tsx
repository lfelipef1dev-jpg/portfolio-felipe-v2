'use client';

import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experiência <span className="text-gradient">Profissional</span>
            </h2>
            <p className="text-dark-400 text-lg">
              Minha trajetória no desenvolvimento
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-12 pb-8 border-l-2 border-dark-700 last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950" />

                {/* Content */}
                <div className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-400 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-dark-300">
                        <FaBriefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-dark-400 text-sm">
                      <FaCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-3 py-1 bg-primary-600 text-white text-xs rounded-full">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-dark-300"
                      >
                        <FaCheckCircle className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

