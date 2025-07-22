"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  children: ReactNode
  variant?: "default" | "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: ReactNode
}

export function SkillBadge({ children, variant = "default", size = "md", className, icon }: SkillBadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 hover:scale-105"

  const variantClasses = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    accent: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  }

  return (
    <span className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </span>
  )
}

export default SkillBadge
