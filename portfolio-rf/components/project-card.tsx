"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Lock,
  ExternalLink,
  Star,
  Clock,
  Shield,
  Info,
  Zap,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/hooks/use-i18n";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  isPrivate?: boolean;
  priority?: "high" | "medium" | "low";
  category?: string;
  status?: string;
  developmentTime?: string;
  features?: string[];
  impact?: string;
}

const priorityConfig = {
  high: {
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: Star,
    label: "Alta Prioridade",
  },
  medium: {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: Clock,
    label: "Prioridade Média",
  },
  low: {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: Clock,
    label: "Baixa Prioridade",
  },
};

const statusConfig = {
  "Em produção": {
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    pulse: true,
  },
  Concluído: {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    pulse: false,
  },
  "Em desenvolvimento": {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    pulse: true,
  },
};

export function ProjectCard({
  title,
  description,
  technologies = [],
  image,
  liveUrl,
  githubUrl,
  isPrivate = false,
  priority = "medium",
  category = "Projeto",
  status = "Concluído",
  developmentTime,
  features = [],
  impact,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useI18n();

  const PriorityIcon = priorityConfig[priority]?.icon || Clock;
  const priorityColors = priorityConfig[priority];
  const statusColors = statusConfig[status as keyof typeof statusConfig];

  const handleProjectAccess = (url: string) => {
    if (isPrivate || url === "#") {
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-zinc-700/50 transition-all duration-700 flex flex-col"
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
          borderColor: "rgba(147, 51, 234, 0.5)",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Animated background gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(45deg, rgba(147, 51, 234, 0.03) 0%, transparent 50%, rgba(236, 72, 153, 0.03) 100%)",
                    "linear-gradient(45deg, rgba(236, 72, 153, 0.03) 0%, transparent 50%, rgba(147, 51, 234, 0.03) 100%)",
                  ],
                }
              : {}
          }
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "-20%",
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Header with image and overlays */}
        <div className="relative overflow-hidden h-80 flex-shrink-0 group/image bg-zinc-800/20">
          {/* Priority badge */}
          {priority && (
            <motion.div
              className="absolute top-4 left-4 z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className={`flex items-center gap-2 px-3 py-2 rounded-full ${priorityColors?.bg} ${priorityColors?.border} border backdrop-blur-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <PriorityIcon className={`w-3 h-3 ${priorityColors?.color}`} />
                <span
                  className={`text-xs font-semibold ${priorityColors?.color}`}
                >
                  {priority === "high"
                    ? "Alta"
                    : priority === "medium"
                    ? "Média"
                    : "Baixa"}
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* Status badge */}
          {status && statusColors && (
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className={`flex items-center gap-2 px-3 py-2 rounded-full ${statusColors.bg} ${statusColors.border} border backdrop-blur-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${statusColors.color.replace(
                    "text-",
                    "bg-"
                  )}`}
                  animate={
                    statusColors.pulse
                      ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-xs font-semibold ${statusColors.color}`}>
                  {status}
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* Development time badge */}
          {developmentTime && (
            <motion.div
              className="absolute bottom-4 left-4 z-20"
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-900/80 border border-zinc-600/50 backdrop-blur-xl"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Calendar className="w-3 h-3 text-zinc-300" />
                <span className="text-xs font-medium text-zinc-300">
                  {developmentTime}
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* Private project overlay with enhanced animation */}
          <AnimatePresence>
            {isPrivate && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 backdrop-blur-sm z-15"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Lock className="w-10 h-10 text-amber-400 mx-auto" />
                    </motion.div>
                    <p className="text-amber-300 text-base font-bold">
                      Projeto Privado
                    </p>
                    <p className="text-amber-200/90 text-sm px-6 leading-relaxed">
                      Acesso restrito - Funcionários SESA
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image with enhanced hover effects */}
          <motion.img
            src={image || "/placeholder.svg?height=320&width=800"}
            alt={title}
            className={`w-full h-full object-contain transition-all duration-700 ${
              isPrivate ? "grayscale opacity-50" : ""
            }`}
            style={{
              transform: isHovered && !isPrivate ? "scale(1.08)" : "scale(1)",
              filter:
                isHovered && !isPrivate
                  ? "brightness(1.1) saturate(1.2)"
                  : "brightness(1) saturate(1)",
            }}
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.6 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content area */}
        <div className="p-6 flex-grow flex flex-col space-y-5">
          {/* Title and Category */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <motion.h3
                className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {title}
              </motion.h3>
              {isPrivate && (
                <motion.div
                  animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                  }}
                >
                  <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
                </motion.div>
              )}
            </div>

            {category && (
              <motion.span
                className="inline-block px-3 py-1.5 bg-zinc-800/80 text-zinc-300 text-xs rounded-lg font-semibold border border-zinc-700/50 hover:bg-zinc-700/80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
            )}
          </div>

          {/* Description */}
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className={`text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-all duration-300 ${
                isHovered ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Features (if available) */}
          {features.length > 0 && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-zinc-300">
                  Features principais:
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.span
                    key={index}
                    className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md border border-purple-500/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Impact (if available) */}
          {impact && (
            <motion.div
              className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-green-300 text-xs leading-relaxed font-medium">
                  {impact}
                </p>
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {technologies && technologies.length > 0 ? (
              technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-300 text-xs border border-zinc-700/50 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))
            ) : (
              <Badge
                variant="secondary"
                className="bg-zinc-800/60 text-zinc-300 text-xs border border-zinc-700/50"
              >
                {t("common.webDevelopment")}
              </Badge>
            )}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex justify-between items-center mt-auto pt-5 border-t border-zinc-700/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className={`text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600/50 ${
                  isPrivate ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleProjectAccess(githubUrl)}
                disabled={isPrivate}
              >
                <Github className="mr-2 h-4 w-4" />
                Código
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isPrivate
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                }`}
                onClick={() => handleProjectAccess(liveUrl)}
                disabled={isPrivate}
              >
                {isPrivate ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Privado
                  </>
                ) : (
                  <>
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
