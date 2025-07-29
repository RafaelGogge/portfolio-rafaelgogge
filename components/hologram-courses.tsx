"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Award,
  Clock,
  CheckCircle,
  PlayCircle,
  ExternalLink,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const coursesData = [
  {
    id: "react-advanced",
    title: "React.js Avançado",
    institution: "Origamid",
    duration: 36,
    status: "completed",
    category: "frontend",
    level: "advanced",
    rating: 5,
    certificate: "https://example.com/cert1",
    description:
      "Desenvolvimento avançado com React, hooks customizados, performance e testes.",
    skills: ["React", "Hooks", "Context API", "Performance"],
    color: "#61dafb",
    progress: 100,
  },
  {
    id: "typescript-react",
    title: "TypeScript para React",
    institution: "Udemy",
    duration: 20,
    status: "completed",
    category: "frontend",
    level: "intermediate",
    rating: 4,
    certificate: "https://example.com/cert2",
    description: "TypeScript aplicado ao React com tipagem avançada.",
    skills: ["TypeScript", "React", "Interfaces", "Generics"],
    color: "#3178c6",
    progress: 100,
  },
  {
    id: "nextjs-production",
    title: "Next.js Production Ready",
    institution: "Vercel Academy",
    duration: 15,
    status: "inProgress",
    category: "fullstack",
    level: "intermediate",
    rating: 0,
    certificate: null,
    description: "Framework React para produção com SSG, SSR e API Routes.",
    skills: ["Next.js", "SSG", "SSR", "Vercel"],
    color: "#000000",
    progress: 75,
  },
  {
    id: "aws-fundamentals",
    title: "AWS Cloud Fundamentals",
    institution: "Amazon Web Services",
    duration: 40,
    status: "completed",
    category: "cloud",
    level: "beginner",
    rating: 5,
    certificate: "https://example.com/cert3",
    description: "Fundamentos da AWS, EC2, S3, Lambda e melhores práticas.",
    skills: ["AWS", "EC2", "S3", "Lambda"],
    color: "#ff9900",
    progress: 100,
  },
  {
    id: "docker-kubernetes",
    title: "Docker & Kubernetes",
    institution: "Docker Inc",
    duration: 30,
    status: "inProgress",
    category: "devops",
    level: "intermediate",
    rating: 0,
    certificate: null,
    description: "Containerização e orquestração para ambientes de produção.",
    skills: ["Docker", "Kubernetes", "DevOps", "Containers"],
    color: "#2496ed",
    progress: 60,
  },
  {
    id: "cybersecurity-basics",
    title: "Fundamentos de Cybersecurity",
    institution: "Cisco Academy",
    duration: 25,
    status: "completed",
    category: "security",
    level: "beginner",
    rating: 4,
    certificate: "https://example.com/cert4",
    description: "Segurança da informação, ameaças e contramedidas.",
    skills: ["Security", "Networks", "Threats", "Prevention"],
    color: "#1ba1e2",
    progress: 100,
  },
];

const categories = [
  { id: "all", label: "Todos", icon: Zap, color: "#ffffff" },
  { id: "frontend", label: "Frontend", icon: Code2, color: "#61dafb" },
  { id: "fullstack", label: "Fullstack", icon: Database, color: "#10b981" },
  { id: "cloud", label: "Cloud", icon: Cloud, color: "#ff9900" },
  { id: "devops", label: "DevOps", icon: Shield, color: "#2496ed" },
  { id: "security", label: "Security", icon: Shield, color: "#ef4444" },
];

export function HologramCourses() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredCourses = coursesData.filter(
    (course) =>
      selectedCategory === "all" || course.category === selectedCategory
  );

  const getStatusIcon = (status: string) => {
    return status === "completed" ? CheckCircle : PlayCircle;
  };

  const getStatusColor = (status: string) => {
    return status === "completed" ? "#10b981" : "#3b82f6";
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "#10b981";
      case "intermediate":
        return "#f59e0b";
      case "advanced":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="space-y-8">
      {/* Holographic Header */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Sistema de Aprendizado
                </h3>
                <p className="text-muted-foreground text-sm">
                  {filteredCourses.length} cursos •{" "}
                  {coursesData.filter((c) => c.status === "completed").length}{" "}
                  concluídos
                </p>
              </div>
            </div>

            {/* Progress Ring */}
            <div className="relative w-16 h-16">
              <svg
                className="w-16 h-16 transform -rotate-90"
                viewBox="0 0 64 64"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength:
                      coursesData.filter((c) => c.status === "completed")
                        .length / coursesData.length,
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    pathLength:
                      coursesData.filter((c) => c.status === "completed")
                        .length / coursesData.length,
                    strokeDasharray: "175.929",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {Math.round(
                    (coursesData.filter((c) => c.status === "completed")
                      .length /
                      coursesData.length) *
                      100
                  )}
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive
                  ? "border-primary/50 bg-primary/20 text-primary"
                  : "border-border bg-muted/50 text-muted-foreground hover:border-border/70"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent
                    className="w-4 h-4"
                    style={{ color: isActive ? "var(--primary)" : category.color }}
                  />
                  <span className="text-sm font-medium">{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, index) => {
            const StatusIcon = getStatusIcon(course.status);

            return (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  layout: { duration: 0.3 },
                }}
                className="group"
              >
                <motion.div
                className="relative bg-background/70 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-border/70 transition-all duration-300"
                  style={{
                    boxShadow: `0 4px 20px ${course.color}20`,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 8px 30px ${course.color}30`,
                  }}
                  onClick={() =>
                    setSelectedCourse(
                      selectedCourse === course.id ? null : course.id
                    )
                  }
                >
                  {/* Holographic Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${course.color}10, transparent, ${course.color}10)`,
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border/60">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: course.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <StatusIcon
                            className="w-5 h-5"
                            style={{ color: getStatusColor(course.status) }}
                          />
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${getLevelColor(
                                course.level
                              )}20`,
                              color: getLevelColor(course.level),
                            }}
                          >
                            {course.level}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-2">
                          {course.institution}
                        </p>

                        {course.rating > 0 && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < course.rating
                            ? "text-warning fill-current"
                            : "text-muted-foreground"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">
                              ({course.rating})
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}h</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-muted/50 text-foreground/80 rounded border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{course.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: getStatusColor(course.status),
                          }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {course.status === "completed"
                            ? "Concluído"
                            : "Em andamento"}
                        </span>
                      </div>

                      {course.certificate && (
                        <motion.a
                          href={course.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Award className="w-3 h-3" />
                          <span>Certificado</span>
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedCourse === course.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border bg-background/50 p-4"
                      >
                        <h4 className="text-sm font-semibold mb-2 text-primary">
                          Todas as Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Stats Panel */}
      <motion.div
        className="bg-background/70 backdrop-blur-sm border border-border rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="text-lg font-bold mb-4 text-center text-foreground">
          Estatísticas de Aprendizado
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total de Cursos",
              value: coursesData.length,
              color: "#3b82f6",
            },
            {
              label: "Concluídos",
              value: coursesData.filter((c) => c.status === "completed").length,
              color: "#10b981",
            },
            {
              label: "Em Andamento",
              value: coursesData.filter((c) => c.status === "inProgress")
                .length,
              color: "#f59e0b",
            },
            {
              label: "Horas Totais",
              value: coursesData.reduce((acc, c) => acc + c.duration, 0),
              color: "#8b5cf6",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-muted/50 rounded-lg border border-border"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className="text-2xl font-bold mb-1"
                style={{ color: stat.color }}
                initial={{ textShadow: "0 0 0px transparent" }}
                animate={{ textShadow: `0 0 10px ${stat.color}40` }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
