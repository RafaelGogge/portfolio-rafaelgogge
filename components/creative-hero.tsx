"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  X,
  FileText,
  Terminal,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/use-i18n";
import { HackerTerminal } from "./hacker-terminal";
import { TerminalButton } from "./terminal-button";
import { FloatingCode } from "./floating-code";
import { TypewriterEffect } from "./typewriter-effect";

export function CreativeHero() {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadCV = (language: string) => {
    const pdfFiles = {
      "pt-BR": "/Curriculo_RafaelGogge.pdf",
      "pt-PT": "/Curriculo_RafaelGogge_PT.pdf",
      en: "/Curriculum_RafaelGogge.pdf",
      es: "/Curriculum_RafaelGogge_ES.pdf",
    };

    const pdfPath = pdfFiles[language as keyof typeof pdfFiles];
    if (pdfPath) {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = `Rafael_Gogge_CV_${language}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setIsResumeModalOpen(false);
  };

  const resumeLanguages = [
    { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷" },
    { code: "pt-PT", name: "Português (Portugal)", flag: "🇵🇹" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

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
          <Button
            onClick={() => setIsResumeModalOpen(true)}
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg transition-all duration-300 font-semibold border-2 border-blue-600 hover:border-blue-700"
          >
            <span className="relative z-10 flex items-center">
              <Download className="mr-2 h-5 w-5" />
              {t("nav.resume")}
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-zinc-900 px-8 py-3 rounded-lg transition-all duration-300 font-semibold border-2"
          >
            <span className="relative z-10 flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              {t("nav.contact")}
            </span>
          </Button>
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

      {/* Resume Language Selection Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setIsResumeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locale === "pt"
                    ? "Currículo - Rafael Vieira Gogge"
                    : "Resume - Rafael Vieira Gogge"}
                </h3>
                <p className="text-slate-400">{t("hero.role")}</p>
              </div>

              <div className="space-y-3">
                {resumeLanguages.map((language) => (
                  <Button
                    key={language.code}
                    onClick={() => handleDownloadCV(language.code)}
                    className="w-full justify-start text-left p-4 h-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
                    variant="outline"
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {language.flag}
                    </span>
                    <div>
                      <p className="text-white font-medium">{language.name}</p>
                      <p className="text-sm text-slate-400 mt-1">
                        {language.code === "pt-BR" &&
                          "Versão em português brasileiro"}
                        {language.code === "pt-PT" &&
                          "Versão em português de Portugal"}
                        {language.code === "en" && "English version"}
                        {language.code === "es" && "Versión en español"}
                      </p>
                    </div>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
