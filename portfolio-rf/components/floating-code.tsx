"use client"

import { useEffect, useState } from "react"

interface FloatingCodeProps {
  isActive?: boolean
}

const codeSnippets = [
  "const portfolio = new Developer();",
  "function createAwesome() { return true; }",
  "git commit -m 'Added cool feature'",
  "npm install awesome-skills",
  "console.log('Hello, World!');",
  "import React from 'react';",
  "export default Portfolio;",
  "const skills = ['React', 'TypeScript'];",
  "async function fetchData() {}",
  "class Developer extends Human {}",
]

interface FloatingCode {
  id: number
  text: string
  x: number
  y: number
  speed: number
  opacity: number
}

export function FloatingCode({ isActive = false }: FloatingCodeProps) {
  const [codes, setCodes] = useState<FloatingCode[]>([])

  useEffect(() => {
    if (!isActive) {
      setCodes([])
      return
    }

    const interval = setInterval(() => {
      setCodes((prev) => {
        // Remove codes that are off screen
        const filtered = prev.filter((code) => code.y > -50)

        // Add new code occasionally
        if (Math.random() < 0.3 && filtered.length < 10) {
          const newCode: FloatingCode = {
            id: Date.now(),
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            x: Math.random() * (window.innerWidth - 200),
            y: window.innerHeight + 50,
            speed: 0.5 + Math.random() * 1.5,
            opacity: 0.3 + Math.random() * 0.4,
          }
          return [...filtered, newCode]
        }

        return filtered
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const animationFrame = setInterval(() => {
      setCodes((prev) =>
        prev.map((code) => ({
          ...code,
          y: code.y - code.speed,
        })),
      )
    }, 16)

    return () => clearInterval(animationFrame)
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {codes.map((code) => (
        <div
          key={code.id}
          className="absolute text-green-400 font-mono text-sm whitespace-nowrap floating-code"
          style={{
            left: `${code.x}px`,
            top: `${code.y}px`,
            opacity: code.opacity,
          }}
        >
          {code.text}
        </div>
      ))}
    </div>
  )
}

export default FloatingCode
