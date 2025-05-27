"use client"

import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"

interface MobileSaveButtonProps {
    onClick: () => void
    isSaving: boolean
}

export function MobileSaveButton({ onClick, isSaving }: MobileSaveButtonProps) {
    return (
        <div className="fixed bottom-6 left-6 z-40">
            <Button
                onClick={onClick}
                disabled={isSaving}
                size="lg"
                className="h-14 w-14 rounded-full shadow-lg bg-green-600 hover:bg-green-700"
            >
                <Save className="h-6 w-6" />
            </Button>
        </div>
    )
}
