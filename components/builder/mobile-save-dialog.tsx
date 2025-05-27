"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Save } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { PageData } from "@/types"
import { ThemeSelector } from "./theme-selector"

interface MobileSaveDialogProps {
    isOpen: boolean
    onClose: () => void
    pageData: PageData
    onMetaUpdate: (meta: PageData["meta"]) => void
    onThemeChange: (themeId: string) => void
    onSave: () => void
    isSaving: boolean
}

export function MobileSaveDialog({
    isOpen,
    onClose,
    pageData,
    onMetaUpdate,
    onThemeChange,
    onSave,
    isSaving,
}: MobileSaveDialogProps) {
    const [meta, setMeta] = useState(pageData.meta)

    const handleMetaChange = (field: keyof PageData["meta"], value: string) => {
        const newMeta = { ...meta, [field]: value }
        setMeta(newMeta)
        onMetaUpdate(newMeta)
    }

    const handleSave = () => {
        onSave()
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-end"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 500,
                        }}
                        className="w-full bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">
                                Page Settings
                            </h2>
                            <Button variant="ghost" size="sm" onClick={onClose}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div>
                                <Label htmlFor="mobile-title">Page Title</Label>
                                <Input
                                    id="mobile-title"
                                    value={meta.title}
                                    onChange={(e) =>
                                        handleMetaChange(
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter page title"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="mobile-url">Page URL</Label>
                                <Input
                                    id="mobile-url"
                                    value={meta.url}
                                    onChange={(e) =>
                                        handleMetaChange("url", e.target.value)
                                    }
                                    placeholder="/your-page-url"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="mobile-description">
                                    Meta Description
                                </Label>
                                <Textarea
                                    id="mobile-description"
                                    value={meta.description}
                                    onChange={(e) =>
                                        handleMetaChange(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter meta description"
                                    rows={3}
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="mobile-keywords">
                                    Keywords
                                </Label>
                                <Input
                                    id="mobile-keywords"
                                    value={meta.keywords}
                                    onChange={(e) =>
                                        handleMetaChange(
                                            "keywords",
                                            e.target.value
                                        )
                                    }
                                    placeholder="keyword1, keyword2, keyword3"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="mobile-author">Author</Label>
                                <Input
                                    id="mobile-author"
                                    value={meta.author}
                                    onChange={(e) =>
                                        handleMetaChange(
                                            "author",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Author name"
                                    className="mt-1"
                                />
                            </div>

                            <ThemeSelector
                                selectedTheme={pageData.theme || "soft-pink"}
                                onThemeChange={onThemeChange}
                            />
                        </div>

                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="w-full"
                            size="lg"
                        >
                            <Save className="h-4 w-4 mr-2" />
                            {isSaving ? "Saving..." : "Save Page"}
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
