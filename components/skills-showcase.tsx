"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap, Target, Activity } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Front-End",
    icon: Code,
    description: "Interfaces modernas, acessíveis e responsivas",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    skills: [
      { name: "HTML5", level: 85, description: "Semântica e acessibilidade" },
      { name: "CSS3", level: 80, description: "Flexbox, Grid, Animations" },
      { name: "JavaScript", level: 65, description: "ES6+, DOM, Async/Await" },
      { name: "Bootstrap", level: 75, description: "Framework responsivo" },
      { name: "Tailwind CSS", level: 65, description: "Utility-first CSS" },
      {
        name: "UX/UI Design",
        level: 75,
        description: "Princípios de design e usabilidade",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    icon: Database,
    description: "APIs, regras de negócio e sistemas dinâmicos",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
    skills: [
      {
        name: "Python",
        level: 65,
        description: "Linguagem principal para backend",
      },
      { name: "Django", level: 40, description: "Framework web robusto" },
      { name: "FastAPI", level: 35, description: "APIs modernas e rápidas" },
      {
        name: "APIs REST",
        level: 40,
        description: "Integração e consumo de serviços",
      },
      {
        name: "Java",
        level: 50,
        description: "Linguagem secundária para backend",
      },
      {
        name: "Autenticação",
        level: 20,
        description: "Segurança e controle de acesso",
      },
    ],
  },
  {
    id: "database",
    title: "Banco de Dados",
    icon: Database,
    description: "Modelagem relacional e integração de dados",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
    skills: [
      {
        name: "PostgreSQL",
        level: 50,
        description: "Banco principal para projetos",
      },
      { name: "MySQL", level: 40, description: "Administração e consultas" },
      {
        name: "SQL",
        level: 45,
        description: "Consultas otimizadas e complexas",
      },
      {
        name: "Modelagem Relacional",
        level: 35,
        description: "Design de esquemas eficientes",
      },
      {
        name: "Integração de Dados",
        level: 30,
        description: "ETL e dashboards",
      },
    ],
  },
  {
    id: "automation",
    title: "Automação & Cloud",
    icon: Cloud,
    description: "Automação de processos e infraestrutura",
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
    skills: [
      {
        name: "Cloud Computing",
        level: 45,
        description: "Conceitos básicos e implementação",
      },
      {
        name: "n8n",
        level: 65,
        description: "Automação simples de fluxos de trabalho",
      },
      { name: "Git/GitHub", level: 75, description: "Controle de versão" },
      {
        name: "Web Services",
        level: 45,
        description: "Integração entre sistemas",
      },
      {
        name: "Bot Development",
        level: 45,
        description: "Automação simples com Python",
      },
      {
        name: "Sistemas Distribuídos",
        level: 55,
        description: "Arquitetura escalável",
      },
    ],
  },
];

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [scanActive, setScanActive] = useState(false);

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanActive((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Radar-style Category Display */}
      <div className="relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl">
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 grid-rows-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-blue-500/10"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Radar Scanner */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-conic from-transparent via-blue-500/20 to-transparent"
            animate={{ rotate: scanActive ? 360 : 0 }}
            transition={{ duration: 2, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
            }}
          />
        </div>

        {/* Skills Categories in Hexagonal Layout */}
        <div className="relative p-12 h-96 flex items-center justify-center">
          {skillCategories.map((category, index) => {
            const angle = (index * 360) / skillCategories.length;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isActive ? "scale-125" : "hover:scale-110"
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  {isActive && (
                    <div
                      className="absolute -inset-4 rounded-full blur-lg animate-pulse"
                      style={{ backgroundColor: category.glowColor }}
                    />
                  )}

                  {/* Hexagon Shape */}
                  <div
                    className={`w-16 h-16 relative ${
                      isActive ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-r ${
                        category.color
                      } 
                      clip-polygon-[polygon(50%_0%,93.3%_25%,93.3%_75%,50%_100%,6.7%_75%,6.7%_25%)]
                      flex items-center justify-center border-2 ${
                        isActive ? "border-white" : "border-zinc-600"
                      }`}
                      style={{
                        clipPath:
                          "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Category Label */}
                  <div
                    className={`absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                    px-2 py-1 rounded-md text-xs font-medium ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-zinc-800 text-zinc-300"
                    }`}
                  >
                    {category.title}
                  </div>

                  {/* Connecting Lines */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-spin-slow">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Details */}
      {activeSkills && (
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-8"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${activeSkills.color} flex items-center justify-center relative`}
              >
                <activeSkills.icon className="h-8 w-8 text-white" />
                <div className="absolute -inset-1 rounded-full border-2 border-blue-400/30 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  {activeSkills.title}
                </h3>
                <p className="text-zinc-400">{activeSkills.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeSkills.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Skill Level Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-white">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar with Glow */}
                  <div className="relative h-2 bg-zinc-700 rounded-full overflow-hidden mb-3">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${activeSkills.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.2 }}
                    />
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-white/30 rounded-full blur-sm"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.2 }}
                    />
                  </div>

                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {skill.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
