"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { useI18n } from "@/hooks/use-i18n";

interface TerminalCommand {
  command: string;
  output: string[];
  timestamp: string;
}

interface HackerTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  isExpanded?: boolean;
  onExpandToggle?: () => void;
}

interface TerminalLine {
  id: number;
  text: string;
  type: "command" | "output" | "error";
}

const systemCommands = [
  "Initializing portfolio.exe...",
  "Loading developer profile...",
  "Scanning skills database...",
  "Connecting to GitHub API...",
  "Fetching project repositories...",
  "Analyzing code quality... EXCELLENT",
  "Checking experience level... SENIOR",
  "Validating credentials... VERIFIED",
  "Portfolio loaded successfully!",
  "Welcome to Rafael's digital space.",
];

const advancedCommands = [
  "Initializing neural network...",
  "Loading quantum algorithms...",
  "Compiling advanced AI modules...",
  "Establishing secure connections...",
  "Optimizing performance matrices...",
  "Deploying innovative solutions...",
  "System ready. Welcome, Rafael.",
];

const hackerCommands = [
  "> Initializing secure connection...",
  "> Loading user profile...",
  "> Scanning portfolio data...",
  "> Decrypting project files...",
  "> Establishing neural link...",
  "> Welcome to the matrix, developer.",
];

export function HackerTerminal({
  isOpen,
  onClose,
  onToggle,
  isExpanded = false,
  onExpandToggle,
}: HackerTerminalProps) {
  const { theme, setTheme, addToTerminalHistory } = useApp();
  const { t } = useI18n();

  const commands = {
    help: t("terminal.help"),
    whoami: t("terminal.whoami"),
    skills: t("terminal.skills"),
    projects: t("terminal.projects"),
    contact: t("terminal.contact"),
    matrix: t("terminal.matrix"),
    hack: t("terminal.hack"),
    clear: "",
    exit: t("terminal.exit"),
  };

  const [terminalCommands, setTerminalCommands] = useState<TerminalCommand[]>(
    []
  );
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 0, text: "Initializing developer portfolio...", type: "output" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [history, setHistory] = useState<string[]>([
    "Welcome to Rafael's Terminal v2.0",
    "Type 'help' for available commands",
    "",
  ]);
  const [currentPath] = useState("~/portfolio");

  const getTimestamp = () => {
    return new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const simulateDownload = async (language: string) => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simula progresso de download
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          downloadCV(language);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
  };

  const downloadCV = (language = "pt-BR") => {
    const pdfFiles = {
      "pt-BR": "/resumes/Curriculo-Rafael-Vieira-Gogge-PT-BR.pdf",
      en: "/resumes/Resume-Rafael-Vieira-Gogge-EN.pdf",
      es: "/resumes/Curriculo-Rafael-Vieira-Gogge-ES.pdf",
      "pt-PT": "/resumes/Curriculo-Rafael-Vieira-Gogge-PT-PT.pdf",
    };

    const pdfPath =
      pdfFiles[language as keyof typeof pdfFiles] || pdfFiles["pt-BR"];
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `Rafael_Vieira_Gogge_CV_${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const processCommand = (cmd: string): string[] => {
    const command = cmd.toLowerCase().trim();

    switch (command) {
      case "help":
        return [
          "📋 MENU PRINCIPAL:",
          "═════════════════",
          "",
          "🔧 1. SISTEMA",
          "⚙️ 2. CONTROLES DO SITE",
          "📄 3. DOWNLOADS",
          "📞 4. CONTATO",
          "",
          "───────────────────────────────────────",
          "Digite o número da categoria desejada:",
          "• '1' para SISTEMA",
          "• '2' para CONTROLES DO SITE",
          "• '3' para DOWNLOADS",
          "• '4' para CONTATO",
          "",
          "💡 Exemplo: digite '1' e pressione Enter",
          "",
        ];

      case "whoami":
        return ["rafael-vieira-gogge"];

      case "ls -la /skills":
        return ["react.js  typescript.ts  node.js  python.py  docker.yml"];

      case "cat experience.txt":
        return ["5+ years of full-stack development"];

      case 'grep -r "passion" .':
        return [
          "./career/motivation.md: Passionate about creating amazing user experiences",
        ];

      case "docker ps":
        return [
          "CONTAINER ID   IMAGE           STATUS\n1a2b3c4d       portfolio:v1    Up 2 hours",
        ];

      case "git log --oneline":
        return [
          "a1b2c3d Added new features",
          "f4e5d6c Fixed critical bugs",
          "7g8h9i0 Initial commit",
        ];

      case "npm test":
        return ["✓ All tests passing\n✓ Code coverage: 95%"];

      case "curl -s api/status":
        return ['{"status": "online", "uptime": "99.9%"}'];

      case "exit":
        onClose();
        return [];

      case "theme dark":
        setTheme("dark");
        return [
          "🌙 TEMA ESCURO ATIVADO",
          "═════════════════════",
          "> Aplicando tema escuro...",
          "> Ajustando cores...",
          "",
          "✅ TEMA ESCURO APLICADO",
          "• Cores suaves para os olhos",
          "• Contraste otimizado",
          "• Experiência noturna",
          "",
        ];

      case "theme light":
        setTheme("light");
        return [
          "☀️ TEMA CLARO ATIVADO",
          "════════════════════",
          "> Aplicando tema claro...",
          "> Ajustando cores...",
          "",
          "✅ TEMA CLARO APLICADO",
          "• Cores vibrantes",
          "• Contraste profissional",
          "• Experiência diurna",
          "",
        ];

      case "download cv pt":
        simulateDownload("pt-BR");
        return [
          "📡 INICIANDO DOWNLOAD SEGURO",
          "════════════════════════════",
          "> Estabelecendo conexão criptografada...",
          "> Verificando integridade do servidor...",
          "> Autenticando credenciais...",
          "",
          "🔒 DOWNLOAD EM PROGRESSO",
          "• Protocolo: HTTPS/TLS 1.3",
          "• Criptografia: AES-256",
          "• Compressão: GZIP",
          "",
        ];

      case "download cv en":
        simulateDownload("en");
        return [
          "📡 INITIATING SECURE DOWNLOAD",
          "═════════════════════════════",
          "> Establishing encrypted connection...",
          "> Verifying server integrity...",
          "> Authenticating credentials...",
          "",
          "🔒 DOWNLOAD IN PROGRESS",
          "• Protocolo: HTTPS/TLS 1.3",
          "• Encryption: AES-256",
          "• Compression: GZIP",
          "",
        ];

      case "download cv es":
        simulateDownload("es");
        return [
          "📡 INICIANDO DESCARGA SEGURA",
          "════════════════════════════",
          "> Estableciendo conexión cifrada...",
          "> Verificando integridade del servidor...",
          "> Autenticando credenciais...",
          "",
          "🔒 DESCARGA EN PROGRESO",
          "• Protocolo: HTTPS/TLS 1.3",
          "• Cifrado: AES-256",
          "• Compresión: GZIP",
          "",
        ];

      case "contact":
        return [
          "📧 INFORMAÇÕES DE CONTATO",
          "═══════════════════════",
          "• Email: dev.rafaelgogge@gmail.com",
          "• WhatsApp: +55 27 99202-3575",
          "• LinkedIn: linkedin.com/in/rafaelgogge",
          "• GitHub: github.com/rafaelgogge",
          "• Localização: Vitória, ES - Brasil",
          "• Status: 🟢 Disponível para oportunidades",
          "",
        ];

      case "social":
        return [
          "🌐 REDES SOCIAIS",
          "═══════════════",
          "• GitHub: https://github.com/rafaelgogge",
          "• LinkedIn: https://linkedin.com/in/rafaelgogge",
          "• Portfolio: https://rafaelgogge.dev",
          "• Email: dev.rafaelgogge@gmail.com",
          "• WhatsApp: https://wa.me/5527992023575",
          "",
        ];

      case "clear":
        setTerminalCommands([]);
        return [];

      default:
        // Verificar se é um número válido
        if (["1", "2", "3", "4"].includes(command)) {
          // Já tratado acima
          return [];
        }

        return [
          `❌ Comando '${cmd}' não reconhecido.`,
          `💡 Digite 'help' para ver o menu principal.`,
          "",
          "📋 CATEGORIAS DISPONÍVEIS:",
          "• '1' para SISTEMA",
          "• '2' para CONTROLES DO SITE",
          "• '3' para DOWNLOADS",
          "• '4' para CONTATO",
          "",
        ];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    addToTerminalHistory(command);

    let output = "";

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command in commands) {
      output = commands[command as keyof typeof commands];
    } else if (command === "") {
      output = "";
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      `${currentPath} $ ${cmd}`,
      ...(output ? [output, ""] : [""]),
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    setIsTyping(true);
    const output = processCommand(currentInput);

    setTimeout(() => {
      setTerminalCommands((prev: TerminalCommand[]) => [
        ...prev,
        {
          command: currentInput,
          output,
          timestamp: getTimestamp(),
        },
      ]);
      setCurrentInput("");
      setIsTyping(false);
    }, 500);
  };

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalCommands, history]);

  useEffect(() => {
    if (isOpen && terminalCommands.length === 0) {
      const welcomeMessage = [
        "🚀 TERMINAL INTERATIVO INICIADO",
        "═══════════════════════════════",
        "",
        "👋 Bem-vindo ao terminal do portfólio!",
        "",
        "📋 MENU PRINCIPAL:",
        "═════════════════",
        "",
        "🔧 1. SISTEMA",
        "⚙️ 2. CONTROLES DO SITE",
        "📄 3. DOWNLOADS",
        "📞 4. CONTATO",
        "",
        "───────────────────────────────────────",
        "Digite o número da categoria desejada:",
        "• '1' para SISTEMA",
        "• '2' para CONTROLES DO SITE",
        "• '3' para DOWNLOADS",
        "• '4' para CONTATO",
        "",
        "💡 Exemplo: digite '1' e pressione Enter",
        "💡 Digite 'help' para ver este menu novamente",
        "",
      ];

      setTerminalCommands([
        {
          command: "welcome",
          output: welcomeMessage,
          timestamp: getTimestamp(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    const runCommand = async () => {
      if (
        currentCommand >=
        systemCommands.length + advancedCommands.length + hackerCommands.length
      ) {
        setIsTyping(false);
        setIsComplete(true);
        return;
      }

      setIsTyping(true);
      const cmd =
        currentCommand < systemCommands.length
          ? systemCommands[currentCommand]
          : currentCommand < systemCommands.length + advancedCommands.length
          ? advancedCommands[currentCommand - systemCommands.length]
          : hackerCommands[
              currentCommand - systemCommands.length - advancedCommands.length
            ];

      // Add command
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLines((prev) => [
        ...prev,
        {
          id: prev.length,
          text: `$ ${cmd}`,
          type: "command",
        },
      ]);

      // Add output
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLines((prev) => [
        ...prev,
        {
          id: prev.length,
          text: cmd,
          type: "output",
        },
      ]);

      setCurrentCommand((prev) => prev + 1);
      setIsTyping(false);
    };

    const timeout = setTimeout(runCommand, 2000);
    return () => clearTimeout(timeout);
  }, [currentCommand]);

  if (!isOpen) return null;

  return (
    <>
      {/* Download Overlay */}
      {isDownloading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
        >
          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-green-400 text-xl font-mono mb-4">
                📡 DOWNLOAD SEGURO
              </div>
              <div className="text-gray-300 text-sm mb-6">
                Baixando informações criptografadas...
              </div>

              {/* Progress Bar */}
              <div className="bg-gray-800 rounded-full h-4 mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-300"
                  initial={{ width: 0 }}
                  animate={{ width: `${downloadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="text-green-400 font-mono text-sm">
                {Math.round(downloadProgress)}% Concluído
              </div>

              <div className="text-gray-500 text-xs mt-2">
                Protocolo: HTTPS/TLS 1.3 | Criptografia: AES-256
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Terminal Container */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={`terminal-container ${isMinimized ? "minimized" : ""}`}
          style={{
            width: isMinimized ? "300px" : isExpanded ? "90vw" : "600px",
            height: isMinimized ? "48px" : isExpanded ? "80vh" : "500px",
          }}
        >
          <div className="terminal-wrapper">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="window-title">
                <Terminal className="h-4 w-4" />
                <span>rafaelvieiragogge@portfolio</span>
              </div>
              <div className="window-controls">
                <button
                  onClick={onClose}
                  className="close-btn"
                  title="Fechar Terminal"
                >
                  ×
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="minimize-btn"
                  title={isMinimized ? "Restaurar" : "Minimizar"}
                >
                  {isMinimized ? "□" : "−"}
                </button>
                <button
                  onClick={() => onExpandToggle?.()}
                  className="maximize-btn"
                  title={isExpanded ? "Modo Normal" : "Expandir"}
                >
                  {isExpanded ? "⟲" : "□"}
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Terminal Content */}
                <div ref={terminalRef} className="terminal-content">
                  {/* Welcome Message */}
                  {terminalCommands.length === 0 && (
                    <div className="terminal-output mb-4">
                      <div>🚀 Terminal Portfolio v3.0 - Hacker Edition</div>
                      <div className="opacity-75">
                        Digite 'help' para ver os comandos disponíveis
                      </div>
                    </div>
                  )}

                  {/* Command History */}
                  {lines.map((line) => (
                    <div
                      key={line.id}
                      className={`space-y-1 ${
                        line.type === "command"
                          ? "text-green-300"
                          : line.type === "error"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {line.text.split("\n").map((text, i) => (
                        <div key={i}>{text}</div>
                      ))}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="terminal-output animate-pulse">
                      <span className="opacity-75">[{getTimestamp()}]</span>{" "}
                      <span className="terminal-prompt">system:</span>{" "}
                      <span>Processando comando...</span>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="terminal-input-area">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center w-full gap-2"
                  >
                    <span className="terminal-prompt font-mono text-sm">
                      user@portfolio:~$
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      className="flex-1 bg-transparent terminal-input font-mono text-sm outline-none placeholder-current/50"
                      placeholder="Digite um comando..."
                      disabled={isTyping}
                    />
                    <div className="terminal-prompt animate-pulse">|</div>
                  </form>
                </div>
              </>
            )}
          </div>

          {isComplete && (
            <div className="mt-4 p-3 border border-green-500 rounded">
              <div className="text-green-300 text-center">
                ✓ SYSTEM READY - PORTFOLIO ONLINE
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HackerTerminal;
