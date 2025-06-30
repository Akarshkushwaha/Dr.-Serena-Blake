"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
  preferredTime?: string
  agreeToContact?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter at least 10 digits"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred time to reach you is required"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Thank you for your message! Dr. Blake will be in touch with you soon, usually within one business day.")

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    })

    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-blue-700">
                Ready to take the first step? I am here to help you on your journey.
              </p>
            </div>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Phone</div>
                    <div className="text-blue-700">(323) 555-0192</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Email</div>
                    <div className="text-blue-700">serena@blakepsychology.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Office</div>
                    <div className="text-blue-700">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles, CA 90026
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Office Hours</div>
                    <div className="text-blue-700">
                      In-person: Tue & Thu, 10 AM–6 PM
                      <br />
                      Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Get In Touch</CardTitle>
              <CardDescription className="text-blue-600">
                Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one
                business day. This form is safe, private, and completely free.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-900">Name</label>
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`border-blue-200 ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-900">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`border-blue-200 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-900">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`border-blue-200 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-900">What brings you here?</label>
                  <Textarea
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`border-blue-200 min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-900">Preferred time to reach you</label>
                  <Input
                    placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                    className={`border-blue-200 ${errors.preferredTime ? "border-red-500" : ""}`}
                  />
                  <p className="text-xs text-blue-600">
                    Let us know when you are typically available for a call or consultation
                  </p>
                  {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agree"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                    />
                    <label htmlFor="agree" className="text-sm text-blue-900">
                      I agree to be contacted
                    </label>
                  </div>
                  {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                <p className="text-xs text-blue-600 text-center">
                  By clicking submit you consent to receive texts and emails from Dr. Serena Blake
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
