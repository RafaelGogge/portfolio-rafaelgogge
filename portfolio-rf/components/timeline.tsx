"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Zap,
  ChevronDown,
  Monitor,
  Bot,
  Database,
  Smartphone,
  Building2,
  Briefcase,
  Info,
  Clock,
  MapPin,
  Code2,
  Target,
  Sparkles,
  Lock
} from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useI18n } from "@/hooks/use-i18n";

interface Project {
  name: string;
  description: string;
  type:
    | "Sistema Web"
    | "Bot Telegram"
    | "Dashboard"
    | "Quiz Interativo"
    | "Plataforma";
  technologies: string[];
  impact?: string;
  screenshot?: string;
  link?: string;
  isPrivate?: boolean;
}

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  duration?: string;
  location: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  projects?: Project[];
  achievements?: string[];
  current?: boolean;
  priority?: "principal" | "secundário";
}

interface TimelineProps {
  items: TimelineItem[];
}

const typeIcons = {
  "Sistema Web": Monitor,
  "Bot Telegram": Bot,
  "Dashboard": Database,
  "Quiz Interativo": Zap,
  "Plataforma": Smartphone,
};

const typeColors = {
  "Sistema Web": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Bot Telegram": "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "Dashboard": "bg-purple-500/15 text-purple-400 border-purple-500/25",
  "Quiz Interativo": "bg-amber-500/15 text-amber-400 border-amber-500/25",
  "Plataforma": "bg-slate-500/15 text-slate-400 border-slate-500/25",
};

function TechnologyBadge({ tech }: { tech: string }) {
  const techCategories: { [key: string]: string } = {
    // Frontend
    JavaScript: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    HTML5: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    CSS3: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    Bootstrap: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    Tailwind: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    
    // Backend
    Python: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    Django: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    PostgreSQL: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    
    // Tools & Others
    N8N: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    Git: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    "GitHub Copilot": "bg-purple-500/15 text-purple-400 border-purple-500/25",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
        techCategories[tech] || "bg-slate-500/15 text-slate-400 border-slate-500/25"
      } transition-all duration-200 hover:scale-105`}
    >
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const IconComponent = typeIcons[project.type];

  const handleClick = () => {
    if (project.link) {
      // Se o link começa com #, rola para a seção na mesma página
      if (project.link.startsWith('#')) {
        const projectsSection = document.querySelector(project.link);
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se é um link externo, abre em nova aba
        window.open(project.link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <motion.div
      className="bg-zinc-900/50 border border-zinc-700/30 rounded-lg p-3 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer group relative overflow-hidden"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 flex-1">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <IconComponent className="w-4 h-4 text-zinc-400 group-hover:text-purple-400 transition-colors" />
          </motion.div>
          <div className="flex flex-col flex-1">
            <h4 className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors truncate">
              {project.name}
            </h4>
            {/* Private Project Message */}
            {project.isPrivate && (
              <span className="text-xs text-amber-400/80 font-medium">
                🔒 Acesso restrito - Funcionários SESA
              </span>
            )}
          </div>
          {/* Private Project Indicator */}
          {project.isPrivate && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center"
            >
              <Lock className="w-4 h-4 text-amber-400 flex-shrink-0" />
            </motion.div>
          )}
          {/* External Link Indicator */}
          {project.link && !project.link.startsWith('#') && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-zinc-500 group-hover:text-purple-400 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          )}
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border flex-shrink-0 ml-2 ${
            typeColors[project.type]
          } group-hover:scale-105 transition-transform`}
        >
          {project.type}
        </span>
      </div>
    </motion.div>
  );
}

export function Timeline({ items = [] }: TimelineProps) {
  const { t } = useI18n();
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-zinc-400">{t("common.noExperienceAvailable")}</p>
      </div>
    );
  }

  const toggleDetails = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="w-full">
      {/* Simple Header */}
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Experiência Profissional</h3>
        <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 font-medium">
          {items.length} {items.length === 1 ? 'posição' : 'posições'}
        </div>
      </div>

      {/* Simple Grid Layout */}
      <div className="grid gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-800/40 border border-zinc-700/40 rounded-xl p-6 hover:border-zinc-600/60 hover:bg-zinc-800/60 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  {item.current && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Atual
                    </span>
                  )}
                  {item.priority === "principal" && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30 font-medium">
                      Principal
                    </span>
                  )}
                  {item.priority === "secundário" && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30 font-medium">
                      Secundário
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-purple-300 font-medium">
                    <Building2 className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock className="w-4 h-4" />
                    <span>{item.period}</span>
                    {item.duration && (
                      <span className="text-xs text-zinc-500 bg-zinc-700/30 px-2 py-1 rounded-md">
                        {item.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location === 'Teresina, PI' ? 'Vitória, ES' : item.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats - Simplified */}
              <div className="flex flex-wrap gap-3 text-xs">
                {item.projects && (
                  <div className="flex items-center gap-1.5 text-blue-400/80 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    <Code2 className="w-3 h-3" />
                    <span>{item.projects.length} projeto{item.projects.length !== 1 ? 's' : ''}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-purple-400/80 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                  <Zap className="w-3 h-3" />
                  <span>{item.technologies.length} tecnologia{item.technologies.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, techIndex) => (
                <TechnologyBadge key={techIndex} tech={tech} />
              ))}
            </div>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed mb-4">{item.description}</p>

            {/* Expand Details Button */}
            {(item.projects?.length || item.fullDescription || item.achievements?.length) && (
              <button
                onClick={() => toggleDetails(index)}
                className="flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400 font-medium hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <span>Ver detalhes completos</span>
                <motion.div
                  animate={{ rotate: expandedItems.has(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            )}

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedItems.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-700/30 pt-6 mt-6 space-y-6">
                    {/* Full Description */}
                    {item.fullDescription && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          Detalhes da Função
                        </h4>
                        <p className="text-zinc-300 leading-relaxed">{item.fullDescription}</p>
                      </div>
                    )}

                    {/* Projects */}
                    {item.projects && item.projects.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Principais Projetos
                          <motion.span 
                            className="text-xs text-zinc-500 bg-zinc-700/50 px-2 py-1 rounded-full flex items-center gap-1"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver projetos
                          </motion.span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {item.projects.map((project, projectIndex) => (
                            <ProjectCard key={projectIndex} project={project} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Principais Conquistas
                        </h4>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 mt-2" />
                              <span className="text-zinc-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
