"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

export function Footer() {
  const { t } = useI18n();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rafaelgogge",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rafaelgogge",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rafaelgogge@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Rafael V. Gogge
            </h3>
            <p className="text-slate-400 text-sm">{t("hero.role")}</p>
            <p className="text-slate-500 text-xs mt-1">{t("footer.tagline")}</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-end">
              {t("footer.madeWith")}{" "}
              <Heart size={16} className="mx-1 text-blue-500" /> e dedicação
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © 2024 Rafael V. Gogge. {t("footer.rights")}
            </p>
          </div>
        </div>

        {/* Bottom: Additional Info */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">
            Desenvolvido com Next.js, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
