"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DividerProps {
    type: "line" | "dashed" | "wavy" | "dots" | "zigzag"
    content: any
    isEditing: boolean
    onEdit?: (content: any) => void
    theme?: any
}

export function DividerComponent({
    type,
    content,
    isEditing,
    onEdit,
    theme,
}: DividerProps) {
    const [editContent, setEditContent] = useState(content)

    const defaultContent = {
        color: theme?.colors.primary || "#3b82f6",
        thickness: "2",
        spacing: "40",
    }

    const currentContent = { ...defaultContent, ...content }

    if (isEditing) {
        return (
            <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                <div>
                    <Label>Divider Type</Label>
                    <Select
                        value={type}
                        onValueChange={(value) => {
                            // This would need to be handled at a higher level to change the element type
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="line">Solid Line</SelectItem>
                            <SelectItem value="dashed">Dashed Line</SelectItem>
                            <SelectItem value="wavy">Wavy Line</SelectItem>
                            <SelectItem value="dots">Dotted Line</SelectItem>
                            <SelectItem value="zigzag">Zigzag Line</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Color</Label>
                    <Input
                        type="color"
                        value={editContent.color || defaultContent.color}
                        onChange={(e) =>
                            setEditContent({
                                ...editContent,
                                color: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <Label>Thickness (px)</Label>
                    <Input
                        type="number"
                        min="1"
                        max="10"
                        value={
                            editContent.thickness || defaultContent.thickness
                        }
                        onChange={(e) =>
                            setEditContent({
                                ...editContent,
                                thickness: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <Label>Spacing (px)</Label>
                    <Input
                        type="number"
                        min="10"
                        max="100"
                        value={editContent.spacing || defaultContent.spacing}
                        onChange={(e) =>
                            setEditContent({
                                ...editContent,
                                spacing: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
        )
    }

    const dividerStyle = {
        margin: `${currentContent.spacing}px 0`,
        height: `${currentContent.thickness}px`,
        width: "100%",
    }

    switch (type) {
        case "line":
            return (
                <div
                    style={{
                        ...dividerStyle,
                        backgroundColor: currentContent.color,
                    }}
                />
            )

        case "dashed":
            return (
                <div
                    style={{
                        ...dividerStyle,
                        borderTop: `${currentContent.thickness}px dashed ${currentContent.color}`,
                        backgroundColor: "transparent",
                    }}
                />
            )

        case "wavy":
            return (
                <div style={{ margin: `${currentContent.spacing}px 0` }}>
                    <svg
                        width="100%"
                        height={currentContent.thickness * 4}
                        viewBox="0 0 1200 24"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,12 Q300,0 600,12 T1200,12"
                            stroke={currentContent.color}
                            strokeWidth={currentContent.thickness}
                            fill="none"
                        />
                    </svg>
                </div>
            )

        case "dots":
            return (
                <div
                    style={{
                        ...dividerStyle,
                        borderTop: `${currentContent.thickness}px dotted ${currentContent.color}`,
                        backgroundColor: "transparent",
                    }}
                />
            )

        case "zigzag":
            return (
                <div style={{ margin: `${currentContent.spacing}px 0` }}>
                    <svg
                        width="100%"
                        height={currentContent.thickness * 4}
                        viewBox="0 0 1200 24"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,12 L50,0 L100,12 L150,0 L200,12 L250,0 L300,12 L350,0 L400,12 L450,0 L500,12 L550,0 L600,12 L650,0 L700,12 L750,0 L800,12 L850,0 L900,12 L950,0 L1000,12 L1050,0 L1100,12 L1150,0 L1200,12"
                            stroke={currentContent.color}
                            strokeWidth={currentContent.thickness}
                            fill="none"
                        />
                    </svg>
                </div>
            )

        default:
            return (
                <div
                    style={{
                        ...dividerStyle,
                        backgroundColor: currentContent.color,
                    }}
                />
            )
    }
}
