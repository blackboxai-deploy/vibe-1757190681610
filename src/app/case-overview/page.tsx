import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CaseTimeline from '@/components/CaseTimeline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CaseOverview() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            ACTIVE LITIGATION
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Gooblagoon Waterpark Lawsuit
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of the ongoing legal action against The Gooblagoon waterpark 
            for safety negligence, environmental violations, and wrongful death.
          </p>
        </div>

        {/* Case Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-red-800">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                ⚖️ Legal Status
              </CardTitle>
              <CardDescription className="text-gray-400">
                Current state of legal proceedings
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Case Status:</span>
                  <Badge variant="destructive">Active Discovery</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Filing Date:</span>
                  <span>September 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Court:</span>
                  <span>Superior Court</span>
                </div>
                <div className="flex justify-between">
                  <span>Case Number:</span>
                  <span>CV-2023-45789</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-800">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                👥 Plaintiffs
              </CardTitle>
              <CardDescription className="text-gray-400">
                Victims and affected parties
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Plaintiffs:</span>
                  <span className="font-bold">127</span>
                </div>
                <div className="flex justify-between">
                  <span>Wrongful Death:</span>
                  <span className="text-red-400 font-bold">7 families</span>
                </div>
                <div className="flex justify-between">
                  <span>Personal Injury:</span>
                  <span>89 victims</span>
                </div>
                <div className="flex justify-between">
                  <span>Property Damage:</span>
                  <span>31 claims</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-800">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                💰 Damages
              </CardTitle>
              <CardDescription className="text-gray-400">
                Financial compensation sought
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Sought:</span>
                  <span className="font-bold text-green-400">$50,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Wrongful Death:</span>
                  <span>$28,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical Expenses:</span>
                  <span>$12,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Punitive Damages:</span>
                  <span>$10,000,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legal Claims Section */}
        <Card className="bg-gray-800 border-red-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-red-400">Primary Legal Claims</CardTitle>
            <CardDescription className="text-gray-400">
              The foundation of our lawsuit against The Gooblagoon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Negligence & Safety Violations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Failure to maintain safe conditions for patrons
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Ignoring 156+ documented safety violations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Inadequate lifeguard staffing and training
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Defective equipment and broken safety barriers
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Environmental Violations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Illegal dumping of toxic waste into waterways
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Chemical contamination of pool systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Massive trash accumulation creating health hazards
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Violation of EPA and state environmental regulations
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Corporate Misconduct</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Deliberate concealment of known safety hazards
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Falsification of safety inspection reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Retaliation against whistleblower employees
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Prioritizing profits over public safety
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Wrongful Death & Injury</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Seven preventable deaths due to negligence
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Twenty-three serious injuries requiring hospitalization
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Hundreds of illnesses from contaminated water
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Long-term health impacts on survivors
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Case Timeline
          </h2>
          <CaseTimeline />
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-red-900 to-red-800 border-red-600">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Legal Representation?
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
              If you or your family were affected by The Gooblagoon waterpark disaster, 
              our experienced legal team is ready to fight for your rights and compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900" asChild>
                <Link href="/evidence">View Evidence</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}