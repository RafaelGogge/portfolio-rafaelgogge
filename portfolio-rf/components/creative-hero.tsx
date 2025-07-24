"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  X,
  FileText,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useI18n } from "@/hooks/use-i18n";
import { FloatingCode } from "./floating-code";
import { TypewriterEffect } from "./typewriter-effect";

export function CreativeHero() {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 scanlines pt-20">
      {/* Floating Code Effect */}
      <FloatingCode />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 p-1 animate-float hover-glow"
          >
            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-4xl font-bold text-white animate-pulse-glow">
              RG
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-blue-400 text-lg mb-2 font-mono tracking-wider"
          >
            {">"} console.log("Hello, World!");
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-700"
          >
            Rafael Vieira Gogge
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-6"
          >
            <TypewriterEffect
              texts={[
                "Desenvolvedor Frontend",
                "Especialista em UX/UI",
                "Arquiteto de Interfaces",
              ]}
              className="text-2xl md:text-3xl text-zinc-300 font-mono tracking-wide"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Desenvolvedor Frontend especializado em criar{" "}
            <span className="text-white font-medium">
              experiências digitais intuitivas
            </span>{" "}
            e{" "}
            <span className="text-white font-medium">
              interfaces acessíveis
            </span>
            , focado em usabilidade e impacto social no setor público.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href={
              locale === "en"
                ? "/curriculos/Curriculum_RafaelGogge.pdf"
                : "/curriculos/Curriculo_RafaelGogge.pdf"
            }
            download={
              locale === "en"
                ? "Rafael_Gogge_CV_en.pdf"
                : "Rafael_Gogge_CV_pt-BR.pdf"
            }
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg transition-all duration-300 font-semibold border-2 border-blue-600 hover:border-blue-700 flex items-center justify-center"
            aria-label={t("nav.resume")}
          >
            <Download className="mr-2 h-5 w-5" />
            {t("nav.resume")}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href="https://github.com/rafaelgogge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/rafaelgogge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="mailto:dev.rafaelgogge@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-zinc-500 text-sm mb-2 font-mono">
            {">"} {t("hero.scrollDown")}
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer text-slate-400 hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
