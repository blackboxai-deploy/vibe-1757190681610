'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
    urgency: '',
    incidentDate: '',
    description: '',
    medicalAttention: false,
    consent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for contacting us. A member of our legal team will reach out within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            FREE CONSULTATION
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Our Legal Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you were affected by The Gooblagoon waterpark disaster, we\'re here to help. 
            Get a free, confidential consultation with our experienced legal team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-red-800">
              <CardHeader>
                <CardTitle className="text-2xl text-red-400">
                  File Your Claim
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Provide details about your case and we\'ll contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="caseType" className="text-white">
                        Type of Case *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, caseType: value})}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                          <SelectItem value="personal-injury">Personal Injury</SelectItem>
                          <SelectItem value="illness">Illness from Contamination</SelectItem>
                          <SelectItem value="property-damage">Property Damage</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency" className="text-white">
                        Urgency Level *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, urgency: value})}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="emergency">Emergency - Immediate attention needed</SelectItem>
                          <SelectItem value="urgent">Urgent - Within 48 hours</SelectItem>
                          <SelectItem value="normal">Normal - Within 1 week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="incidentDate" className="text-white">
                      Date of Incident/Visit to Gooblagoon
                    </Label>
                    <Input
                      id="incidentDate"
                      type="date"
                      value={formData.incidentDate}
                      onChange={(e) => setFormData({...formData, incidentDate: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white">
                      Describe What Happened *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                      placeholder="Please provide as much detail as possible about your experience at The Gooblagoon, any injuries or illness suffered, and how it has affected you or your family."
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="medical"
                        checked={formData.medicalAttention}
                        onCheckedChange={(checked) => setFormData({...formData, medicalAttention: checked as boolean})}
                      />
                      <Label htmlFor="medical" className="text-white text-sm">
                        I have sought or am seeking medical attention for my injuries/illness
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                        required
                      />
                      <Label htmlFor="consent" className="text-white text-sm">
                        I consent to be contacted by the legal team regarding my potential case *
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                    disabled={!formData.consent}
                  >
                    Submit My Case Information
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Emergency */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="bg-red-900/30 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  🚨 Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">
                    (555) LAWSUIT
                  </div>
                  <div className="text-red-200 text-sm">
                    Available 24/7 for urgent cases
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Call Now
                </Button>
                <p className="text-red-200 text-xs text-center">
                  For life-threatening emergencies, call 911 first
                </p>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Main Office</h3>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>📍 123 Justice Boulevard</p>
                    <p>Legal District, State 12345</p>
                    <p>📞 (555) 123-LEGAL</p>
                    <p>📧 info@gooblagoon-lawsuit.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">Office Hours</h3>
                  <div className="text-gray-300 text-sm">
                    <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                    <p className="text-red-400 font-medium mt-1">
                      Emergency calls accepted 24/7
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Languages</h3>
                  <div className="text-gray-300 text-sm">
                    <p>English, Spanish, Mandarin</p>
                    <p>Interpretation services available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Act Now */}
            <Card className="bg-gray-800 border-yellow-600">
              <CardHeader>
                <CardTitle className="text-yellow-400">⏰ Why Act Now?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Statute of limitations deadlines approaching
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Evidence may be destroyed if not preserved
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Earlier action = stronger case
                  </p>
                  <p className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Medical documentation is time-sensitive
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-gray-900">
                  Learn About Deadlines
                </Button>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-white">Initial Contact</p>
                      <p>We\'ll review your case within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-white">Free Consultation</p>
                      <p>Detailed case evaluation with our attorneys</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-white">Investigation</p>
                      <p>We gather evidence and build your case</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-medium text-white">Legal Action</p>
                      <p>We fight for maximum compensation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}