import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Evidence() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            EVIDENCE ARCHIVE
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Documentation of Negligence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive evidence showing systematic safety failures, environmental violations, 
            and corporate cover-ups that led to the Gooblagoon disaster.
          </p>
        </div>

        {/* Evidence Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Safety Violations */}
          <Card className="bg-gray-800 border-red-800">
            <CardHeader>
              <CardTitle className="text-red-400 text-2xl flex items-center">
                ⚠️ Safety Violations
              </CardTitle>
              <CardDescription className="text-gray-400">
                Documented safety failures that led to fatalities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6274210a-8535-4bab-a046-4c8ff9522f5b.png" 
                    alt="Broken safety barriers on waterpark slide showing exposed metal and dangerous sharp edges"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Broken Safety Barriers</h3>
                  <p className="text-gray-300 text-sm">
                    Multiple slides with damaged barriers, exposing riders to sharp metal edges 
                    and potential falls. Three fatalities directly linked to these failures.
                  </p>
                  <Badge variant="destructive" className="mt-2">CRITICAL</Badge>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7275b073-a116-4c95-b951-7494b1b5e79c.png" 
                    alt="Empty lifeguard stations during peak hours at busy waterpark"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Unstaffed Lifeguard Posts</h3>
                  <p className="text-gray-300 text-sm">
                    Photo evidence shows critical safety zones left unmonitored during peak hours. 
                    Two drowning deaths occurred in areas without lifeguard coverage.
                  </p>
                  <Badge variant="destructive" className="mt-2">FATAL</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environmental Evidence */}
          <Card className="bg-gray-800 border-red-800">
            <CardHeader>
              <CardTitle className="text-red-400 text-2xl flex items-center">
                🏭 Environmental Violations
              </CardTitle>
              <CardDescription className="text-gray-400">
                Toxic contamination and illegal dumping evidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fcb5cd8c-4307-4143-9793-957794b0a91d.png" 
                    alt="Massive piles of rotting garbage and chemical waste barrels illegally dumped behind waterpark"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Illegal Waste Dumping</h3>
                  <p className="text-gray-300 text-sm">
                    Aerial footage reveals massive illegal dump site behind park with toxic chemicals 
                    leaching into groundwater. EPA confirmed contamination levels 400x legal limits.
                  </p>
                  <Badge className="mt-2 bg-yellow-600">EPA VIOLATION</Badge>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c42c381-903e-45f1-93cf-e51be78473e9.png" 
                    alt="Green contaminated water in waterpark pools with toxic chemical foam floating on surface"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Water Contamination</h3>
                  <p className="text-gray-300 text-sm">
                    Pool water samples show dangerous levels of E.coli, chemical contamination, 
                    and toxic algae. Linked to 67 cases of severe illness and 2 deaths.
                  </p>
                  <Badge variant="destructive" className="mt-2">TOXIC</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Corporate Documents */}
        <Card className="bg-gray-800 border-red-800 mb-12">
          <CardHeader>
            <CardTitle className="text-red-400 text-2xl flex items-center">
              📄 Corporate Cover-Up Evidence
            </CardTitle>
            <CardDescription className="text-gray-400">
              Internal documents revealing deliberate concealment of safety issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93d2f02b-3047-4962-9bb3-b506aaaef347.png" 
                  alt="Corporate email chain showing executives discussing hiding safety violations from state inspectors"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold mb-3">Executive Email Chain</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Internal emails between park executives discussing strategies to hide safety violations 
                  from state inspectors, including bribing officials and falsifying reports.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Document Type:</span>
                    <span className="text-white">Email Communications</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date Range:</span>
                    <span className="text-white">2021-2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <Badge variant="destructive">SMOKING GUN</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f150ad3-c2d7-48ab-a752-76643d50899f.png" 
                  alt="Falsified safety inspection reports showing forged signatures and altered violation dates"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold mb-3">Falsified Inspection Reports</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Comparison of original state inspection reports vs. park's falsified versions 
                  submitted to insurance companies, showing systematic document fraud.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Documents:</span>
                    <span className="text-white">47 Falsified Reports</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Violations Hidden:</span>
                    <span className="text-white">156 Critical Issues</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Criminal Charges:</span>
                    <Badge className="bg-orange-600">FRAUD</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Witness Testimonies */}
        <Card className="bg-gray-800 border-red-800 mb-12">
          <CardHeader>
            <CardTitle className="text-red-400 text-2xl flex items-center">
              🎤 Witness Testimonies
            </CardTitle>
            <CardDescription className="text-gray-400">
              First-hand accounts from employees, visitors, and safety experts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl">
                    👷
                  </div>
                  <h3 className="text-white font-semibold mt-2">Former Safety Manager</h3>
                  <p className="text-gray-400 text-sm">Michael Chen • 8 years at Gooblagoon</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "Management ordered me to ignore safety violations and threatened my job when I 
                  refused. I documented everything because I knew people would die."
                </blockquote>
                <Badge className="mt-3 bg-blue-600">WHISTLEBLOWER</Badge>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl">
                    👩‍⚕️
                  </div>
                  <h3 className="text-white font-semibold mt-2">Emergency Room Doctor</h3>
                  <p className="text-gray-400 text-sm">Dr. Sarah Martinez • County Hospital</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "We saw an unusual spike in chemical burns and respiratory illness from Gooblagoon 
                  visitors months before the deadly weekend. The pattern was unmistakable."
                </blockquote>
                <Badge className="mt-3 bg-green-600">MEDICAL EXPERT</Badge>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl">
                    👨‍👩‍👧‍👦
                  </div>
                  <h3 className="text-white font-semibold mt-2">Surviving Victim</h3>
                  <p className="text-gray-400 text-sm">Jennifer Walsh • Lost daughter Emma, age 12</p>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "The water was green and smelled terrible, but they kept the park open. 
                  My daughter got sick immediately and died three days later from organ failure."
                </blockquote>
                <Badge variant="destructive" className="mt-3">VICTIM FAMILY</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evidence Summary */}
        <Card className="bg-gradient-to-r from-red-900 to-red-800 border-red-600">
          <CardContent className="py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Overwhelming Evidence of Negligence
              </h2>
              <p className="text-red-100 text-lg max-w-3xl mx-auto">
                Our legal team has compiled over 10,000 pages of evidence, 200+ photographs, 
                50+ witness testimonies, and expert analysis proving systematic negligence and cover-ups.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-red-100">Pages of Evidence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-red-100">Photographs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-red-100">Witness Testimonies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25</div>
                <div className="text-red-100">Expert Witnesses</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100" asChild>
                <Link href="/contact">Request Evidence Package</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900" asChild>
                <Link href="/legal-team">Meet Our Attorneys</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}