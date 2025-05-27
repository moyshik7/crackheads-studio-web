"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save } from "lucide-react"
import type { PageData } from "@/types"
import { ThemeSelector } from "./theme-selector"

// Add theme props to the interface
interface RightSidebarProps {
    pageData: PageData
    onMetaUpdate: (meta: PageData["meta"]) => void
    onThemeChange: (themeId: string) => void
    onSave: () => void
    isSaving: boolean
}

export function RightSidebar({
    pageData,
    onMetaUpdate,
    onThemeChange,
    onSave,
    isSaving,
}: RightSidebarProps) {
    const [meta, setMeta] = useState(pageData.meta)

    const handleMetaChange = (field: keyof PageData["meta"], value: string) => {
        const newMeta = { ...meta, [field]: value }
        setMeta(newMeta)
        onMetaUpdate(newMeta)
    }

    return (
        <div className="w-80 lg:w-80 md:w-72 bg-white border-l border-gray-200 p-4 overflow-y-auto hidden md:block">
            <div className="space-y-6">
                <Card className="bg-emerald-200">
                    <CardHeader>
                        <CardTitle className="text-lg text-black">Page Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="title" className="text-black">Page Title</Label>
                            <Input
                                id="title"
                                value={meta.title}
                                onChange={(e) =>
                                    handleMetaChange("title", e.target.value)
                                }
                                placeholder="Enter page title"
                            />
                        </div>

                        <div>
                            <Label htmlFor="url" className="text-black">Page URL</Label>
                            <Input
                                id="url"
                                value={meta.url}
                                onChange={(e) =>
                                    handleMetaChange("url", e.target.value)
                                }
                                placeholder="/your-page-url"
                            />
                        </div>

                        <div>
                            <Label htmlFor="description" className="text-black">
                                Meta Description
                            </Label>
                            <Textarea
                                id="description"
                                value={meta.description}
                                onChange={(e) =>
                                    handleMetaChange(
                                        "description",
                                        e.target.value
                                    )
                                }
                                placeholder="Enter meta description"
                                rows={3}
                            />
                        </div>

                        <div>
                            <Label htmlFor="keywords" className="text-black">Keywords</Label>
                            <Input
                                id="keywords"
                                value={meta.keywords}
                                onChange={(e) =>
                                    handleMetaChange("keywords", e.target.value)
                                }
                                placeholder="keyword1, keyword2, keyword3"
                            />
                        </div>

                        <div>
                            <Label htmlFor="author" className="text-black">Author</Label>
                            <Input
                                id="author"
                                value={meta.author}
                                onChange={(e) =>
                                    handleMetaChange("author", e.target.value)
                                }
                                placeholder="Author name"
                            />
                        </div>

                        <ThemeSelector
                            selectedTheme={pageData.theme || "soft-pink"}
                            onThemeChange={onThemeChange}
                        />
                    </CardContent>
                </Card>

                <Button
                    onClick={onSave}
                    disabled={isSaving}
                    className="w-full"
                    size="lg"
                >
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? "Saving..." : "Save Page"}
                </Button>
            </div>
        </div>
    )
}
