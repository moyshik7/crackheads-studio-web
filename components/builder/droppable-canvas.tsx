"use client"

import type React from "react"

import { useDrop } from "react-dnd"

interface DroppableCanvasProps {
    children: React.ReactNode
    onDrop: (item: any) => void
    className?: string
}

export function DroppableCanvas({
    children,
    onDrop,
    className,
}: DroppableCanvasProps) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "component",
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }))

    return (
        <div
            ref={drop}
            className={`min-h-screen transition-colors ${
                isOver ? "bg-blue-50" : "bg-gray-50"
            } ${className}`}
        >
            {children}
        </div>
    )
}
