"use client"

import type React from "react"
import { useState } from "react"
import { trackContactForm, trackEvent } from "@/lib/analytics"

interface ContactFormProps {
  formId?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ formId = "contact" }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmissionStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, formId }),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setName("")
        setEmail("")
        setMessage("")

        // Rastrear envío del formulario
        trackContactForm("contact")
        trackEvent("lead_generation", "contact", "contact_form_submit")
      } else {
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {submissionStatus === "success" && (
        <div className="text-green-500">Thank you! Your message has been received.</div>
      )}
      {submissionStatus === "error" && (
        <div className="text-red-500">Oops! There was an error submitting your message. Please try again.</div>
      )}
    </form>
  )
}

export default ContactForm
