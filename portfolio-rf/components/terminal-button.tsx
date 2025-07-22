"use client"

import { Terminal, Maximize2, Minimize2 } from "lucide-react"

interface TerminalButtonProps {
  onClick: () => void
  isOpen: boolean
  onExpandToggle: () => void
  isExpanded: boolean
}

export function TerminalButton({ onClick, isOpen, onExpandToggle, isExpanded }: TerminalButtonProps) {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        onClick={onClick}
        className="bg-black border border-green-500 text-green-400 p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-green-500/20 hover:shadow-xl"
        title="Open Terminal"
      >
        <Terminal size={24} />
      </button>

      {isOpen && (
        <button
          onClick={onExpandToggle}
          className="ml-2 bg-black border border-green-500 text-green-400 p-2 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300"
          title={isExpanded ? "Minimize Terminal" : "Maximize Terminal"}
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      )}
    </div>
  )
}

export default TerminalButton
