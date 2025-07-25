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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useI18n } from "@/hooks/use-i18n";
import { FloatingCode } from "./floating-code";
import { TypewriterEffect } from "./typewriter-effect";

export function CreativeHero() {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [openCVModal, setOpenCVModal] = useState(false);

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
          <Dialog open={openCVModal} onOpenChange={setOpenCVModal}>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-0 shadow-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-200"
                aria-label={t("nav.resume")}
                data-testid="cv-download-btn"
                style={{ boxShadow: '0 4px 24px 0 rgba(80, 70, 229, 0.25)' }}
              >
                <Download className="h-5 w-5" />
                {t("nav.resume")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm text-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-0 shadow-2xl p-8 rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-2 flex flex-col items-center gap-2">
                  <Download className="h-8 w-8 text-blue-400 mb-1 animate-bounce" />
                  {locale === "en" ? "Download your CV" : "Download do Currículo"}
                </DialogTitle>
              </DialogHeader>
              <p className="text-zinc-300 mb-6 text-base">
                {locale === "en"
                  ? "Choose your preferred language to download the CV."
                  : "Escolha o idioma desejado para baixar o currículo."}
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="/curriculos/Curriculo_RafaelGogge.pdf"
                  download="Rafael_Gogge_CV_pt-BR.pdf"
                  className={`flex items-center justify-center gap-3 w-full px-5 py-3 rounded-lg font-semibold text-lg border-2 transition-all duration-200 shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 ${locale === "pt-BR" ? "bg-blue-600 text-white border-blue-600" : "bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-blue-700 hover:text-white hover:border-blue-700"}`}
                  onClick={() => setOpenCVModal(false)}
                >
                  <span className="text-2xl">🇧🇷</span> Português
                  {locale === "pt-BR" && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded">Recomendado</span>}
                </a>
                <a
                  href="/curriculos/Curriculum_RafaelGogge.pdf"
                  download="Rafael_Gogge_CV_en.pdf"
                  className={`flex items-center justify-center gap-3 w-full px-5 py-3 rounded-lg font-semibold text-lg border-2 transition-all duration-200 shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 ${locale === "en" ? "bg-blue-600 text-white border-blue-600" : "bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-blue-700 hover:text-white hover:border-blue-700"}`}
                  onClick={() => setOpenCVModal(false)}
                >
                  <span className="text-2xl">🇺🇸</span> English
                  {locale === "en" && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded">Recommended</span>}
                </a>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" className="mt-6 w-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200">
                  {locale === "en" ? "Close" : "Fechar"}
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
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
