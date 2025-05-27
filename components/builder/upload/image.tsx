"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, ImageIcon, Upload } from "lucide-react"

interface ImageUploadProps {
    value: string
    onChange: (url: string) => void
    placeholder?: string
    className?: string
}

export function ImageUpload({
    value,
    onChange,
    placeholder = "Upload image",
    className = "",
}: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false)
    const [dragActive, setDragActive] = useState(false)
    const [uploadMethod, setUploadMethod] = useState<string>("")
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Convert file to base64 for local storage
    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error)
        })
    }

    const uploadStrategies = [
        {
            name: "ImgBB",
            upload: async (file: File): Promise<string> => {
                const formData = new FormData()
                formData.append("image", file)

                const response = await fetch(
                    `https://api.imgbb.com/1/upload?key=45a880efbc0bf5f92f9c1e6b417008e1`,
                    {
                        method: "POST",
                        body: formData,
                    }
                )

                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}: ${response.statusText}`
                    )
                }

                const data = await response.json()
                if (data.success && data.data?.url) {
                    return data.data.url
                }
                throw new Error("Invalid response format")
            },
        }
    ]

    const handleFileUpload = async (file: File) => {
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file")
            return
        }

        // Check file size (ImgBB has a 32MB limit for free accounts)
        if (file.size > 32 * 1024 * 1024) {
            alert("File size too large. Please select an image under 32MB.")
            return
        }

        setIsUploading(true)

        for (const strategy of uploadStrategies) {
            try {
                setUploadMethod(strategy.name)
                console.log(`Attempting upload with ${strategy.name}...`)

                const imageUrl = await strategy.upload(file)
                onChange(imageUrl)
                setDragActive(false)
                console.log(`✅ Upload successful with ${strategy.name}`)
                setIsUploading(false)
                setUploadMethod("")
                return
            } catch (error) {
                console.warn(`❌ ${strategy.name} failed:`, error)

                // If it's the last strategy, show error
                if (
                    strategy === uploadStrategies[uploadStrategies.length - 1]
                ) {
                    alert(
                        `Upload failed with all methods. Error: ${
                            error instanceof Error
                                ? error.message
                                : "Unknown error"
                        }`
                    )
                }
            }
        }

        setIsUploading(false)
        setUploadMethod("")
    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0])
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0])
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemove = () => {
        onChange("")
    }

    return (
        <div className={`space-y-2 ${className}`}>
            {value ? (
                <div className="relative">
                    <img
                        src={value || "/placeholder.svg"}
                        alt="Uploaded"
                        className="w-full h-32 object-cover rounded-lg border"
                        key={value}
                        onError={(e) => {
                            console.error("Image failed to load:", value)
                        }}
                    />
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={handleRemove}
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                    >
                        <X className="h-3 w-3" />
                    </Button>
                </div>
            ) : (
                <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                        dragActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={handleClick}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                    {isUploading ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                            <span className="text-sm text-gray-600">
                                Uploading...
                            </span>
                            {uploadMethod && (
                                <span className="text-xs text-gray-400">
                                    Using {uploadMethod}
                                </span>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <ImageIcon className="h-8 w-8 text-gray-400" />
                            <span className="text-sm text-gray-600">
                                {placeholder}
                            </span>
                            <span className="text-xs text-gray-400">
                                Click or drag & drop
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Upload className="h-3 w-3" />
                                <span>ImgBB + fallback methods</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
