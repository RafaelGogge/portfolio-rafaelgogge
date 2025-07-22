"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  FileText,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Calendar,
  Clock,
  Briefcase,
  Download,
  Copy,
  ExternalLink,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/hooks/use-i18n";

type FormStatus = "idle" | "success" | "error";

export function ContactForm() {
  const { toast } = useToast();
  const { t, locale } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Armazenar erros de validação por campo
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.rafaelgogge@gmail.com",
      href: "mailto:dev.rafaelgogge@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20",
      copyable: true,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 27 99202-3575",
      href: "https://wa.me/5527992023575",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20",
      copyable: false,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Vitória, ES - Brasil",
      href: "https://maps.google.com/?q=Vitória,ES,Brasil",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20",
      copyable: false,
    },
    {
      icon: Briefcase,
      label: "Status",
      value: "Disponível para oportunidades",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20",
      copyable: false,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex: 8h às 18h (UTC-3)",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      hoverColor: "hover:bg-yellow-500/20",
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rafaelgogge",
      color: "text-gray-400",
      hoverColor: "hover:text-white",
      bgColor: "bg-gray-500/10",
      hoverBgColor: "hover:bg-gray-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rafaelgogge",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-500/10",
      hoverBgColor: "hover:bg-blue-500/20",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://rafaelgogge.dev",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-500/10",
      hoverBgColor: "hover:bg-blue-500/20",
    },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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
      link.download = `Rafael_Vieira_Gogge_CV_${language}.pdf`;
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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido";
    }
    if (!formData.subject.trim()) newErrors.subject = "Assunto é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    // Limpa erro ao digitar
    if (errors[field]) {
      setErrors((prev: any) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setFormStatus("error");
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os erros no formulário.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Simula o envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
        variant: "default",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormField = ({
    icon: Icon,
    field,
    placeholder,
    type = "text",
    component = "input",
  }: {
    icon: any;
    field: string;
    placeholder: string;
    type?: string;
    component?: "input" | "textarea";
  }) => {
    const hasError = Boolean(errors[field]);
    const errorMessage = errors[field];

    return (
      <motion.div
        className="space-y-1 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor={field} className="sr-only">
          {placeholder}
        </label>
        <div className="relative">
          <Icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          {component === "input" ? (
            <motion.div
              animate={focusedField === field ? "focused" : "unfocused"}
              transition={{ duration: 0.2 }}
            >
              <Input
                id={field}
                type={type}
                placeholder={placeholder}
                value={formData[field as keyof typeof formData]}
                onChange={(e: any) => handleInputChange(field, e.target.value)}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField(null)}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${field}-error` : undefined}
                className={`pl-10 bg-zinc-900/50 border transition-colors duration-200 ${
                  hasError
                    ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                    : "border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                }`}
                required
              />
            </motion.div>
          ) : (
            <motion.div
              animate={focusedField === field ? "focused" : "unfocused"}
              transition={{ duration: 0.2 }}
            >
              <Textarea
                id={field}
                placeholder={placeholder}
                value={formData[field as keyof typeof formData]}
                onChange={(e: any) => handleInputChange(field, e.target.value)}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField(null)}
                rows={5}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${field}-error` : undefined}
                className={`pl-10 pt-3 bg-zinc-900/50 border transition-colors duration-200 resize-none ${
                  hasError
                    ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                    : "border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                }`}
                required
              />
            </motion.div>
          )}
        </div>
        {/* Erro abaixo do campo */}
        <AnimatePresence>
          {hasError && (
            <motion.p
              id={`${field}-error`}
              role="alert"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-sm text-red-400 mt-1 select-none"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Vamos conversar! 🚀
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Estou sempre aberto a novas oportunidades, projetos interessantes
              e colaborações. Entre em contato comigo através de qualquer um dos
              canais abaixo.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-4 p-4 rounded-lg ${item.bgColor} ${item.hoverColor} transition-all duration-300 group cursor-pointer`}
                onClick={() => {
                  if (item.copyable) {
                    copyToClipboard(item.value);
                  } else if (item.href) {
                    window.open(item.href, "_blank");
                  }
                }}
              >
                <div className={`p-3 rounded-lg ${item.bgColor} ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
                {item.copyable && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                )}
                {item.href && !item.copyable && (
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg ${social.bgColor} ${social.hoverBgColor} ${social.color} ${social.hoverColor} transition-all duration-300 group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h4 className="text-green-400 font-semibold">
                Status: Disponível
              </h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Atualmente aberto para oportunidades de trabalho full-time e
              projetos freelance.
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50"
                onClick={() =>
                  window.open("https://calendly.com/rafaelgogge", "_blank")
                }
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Reunião
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:bg-gray-600/20"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar CV
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8"
        >
          <h4 className="text-2xl font-bold text-white mb-6">
            Envie uma mensagem
          </h4>

          {/* Status Messages */}
          <AnimatePresence mode="wait">
            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 mb-6"
                role="alert"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                >
                  <CheckCircle className="h-5 w-5" />
                </motion.div>
                <div>
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Retornarei o contato em breve.
                  </p>
                </div>
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 mb-6"
                role="alert"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                >
                  <AlertCircle className="h-5 w-5" />
                </motion.div>
                <div>
                  <p className="font-medium">Erro ao enviar mensagem</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Tente novamente ou entre em contato diretamente.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                icon={User}
                field="name"
                placeholder="Seu nome completo"
              />
              <FormField
                icon={Mail}
                field="email"
                placeholder="seu@email.com"
                type="email"
              />
            </div>

            <FormField
              icon={FileText}
              field="subject"
              placeholder="Assunto da mensagem"
            />

            <FormField
              icon={MessageSquare}
              field="message"
              placeholder="Descreva sua proposta, projeto ou oportunidade..."
              component="textarea"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 relative overflow-hidden group py-3"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  animate={{ x: isSubmitting ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-700/50">
            <p className="text-sm text-gray-400 text-center">
              Ou entre em contato diretamente via{" "}
              <button
                onClick={() => copyToClipboard("dev.rafaelgogge@gmail.com")}
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                dev.rafaelgogge@gmail.com
              </button>
            </p>
          </div>
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
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Escolha o idioma do currículo
                </h3>
                <p className="text-zinc-400">
                  Selecione o idioma no qual deseja baixar o currículo
                </p>
              </div>

              <div className="space-y-3">
                {resumeLanguages.map((language) => (
                  <Button
                    key={language.code}
                    onClick={() => handleDownloadCV(language.code)}
                    className="w-full justify-start text-left p-4 h-auto bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-purple-500 transition-all duration-300 group"
                    variant="outline"
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {language.flag}
                    </span>
                    <div>
                      <p className="text-white font-medium">{language.name}</p>
                      <p className="text-sm text-zinc-400 mt-1">
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
    </>
  );
}
