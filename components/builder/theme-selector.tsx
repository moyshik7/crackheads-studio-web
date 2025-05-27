"use client"

import { Label } from "@/components/ui/label"
import { themes } from "@/data/themes"

interface Theme {
    id: string
    name: string
    colors: {
        primary: string
        secondary: string
        accent: string
    }
}

interface ThemeSelectorProps {
    selectedTheme: string
    onThemeChange: (themeId: string) => void
}

export function ThemeSelector({
    selectedTheme,
    onThemeChange,
}: ThemeSelectorProps) {
    return (
        <div className="space-y-3">
            <Label className="text-sm font-medium">Theme</Label>
            <div className="grid grid-cols-1 gap-3">
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => onThemeChange(theme.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                            selectedTheme === theme.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                    }}
                                />
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        backgroundColor: theme.colors.secondary,
                                    }}
                                />
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        backgroundColor: theme.colors.accent,
                                    }}
                                />
                            </div>
                            <span className="text-sm font-medium">
                                {theme.name}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
