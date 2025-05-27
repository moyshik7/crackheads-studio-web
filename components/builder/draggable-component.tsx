"use client"

import type React from "react"

import { useDrag } from "react-dnd"

interface DraggableComponentProps {
  type: string
  children: React.ReactNode
  className?: string
}

export function DraggableComponent({ type, children, className }: DraggableComponentProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`cursor-move p-3 border rounded-lg bg-white hover:bg-gray-50 transition-colors ${
        isDragging ? "opacity-50" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
