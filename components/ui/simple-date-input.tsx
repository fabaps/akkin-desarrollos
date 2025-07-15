"use client"

import type * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SimpleDateInputProps {
  label?: string
  onChange?: (date: Date | null) => void
  value?: Date
  className?: string
}

export function SimpleDateInput({ label, onChange, value, className }: SimpleDateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null
    if (onChange) {
      onChange(date)
    }
  }

  return (
    <div className={className}>
      {label && <Label className="mb-2 block">{label}</Label>}
      <Input
        type="date"
        onChange={handleChange}
        value={value ? value.toISOString().split("T")[0] : ""}
        className="w-full"
      />
    </div>
  )
}
