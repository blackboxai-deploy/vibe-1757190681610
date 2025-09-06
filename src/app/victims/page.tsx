import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import VictimCard from '@/components/VictimCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const victims = [
  {
    name: 'Emma Walsh',
    age: 12,
    status: 'deceased' as const,
    incident: 'Water Contamination',
    description: 'Young Emma was visiting with her family for her birthday celebration. She became violently ill after swimming in contaminated water and died three days later from organ failure caused by toxic exposure.',
    family: 'Parents Jennifer and Michael Walsh, brother Jake (14)',
    imageDescription: 'Memorial+photo+of+young+girl+with+bright+smile+surrounded+by+flowers'
  },
  {
    name: 'Marcus Johnson',
    age: 34,
    status: 'deceased' as const,
    incident: 'Slide Safety Failure',
    description: 'Father of two died instantly when broken safety barriers on the Thunder Rapids slide caused him to be ejected at high speed. The barriers had been reported as damaged for over 6 months.',
    family: 'Wife Sarah, daughters Mia (8) and Zoe (5)',
    imageDescription: 'Memorial+photo+of+smiling+father+with+two+young+daughters'
  },
  {
    name: 'Robert Chen',
    age: 67,
    status: 'deceased' as const,
    incident: 'Cardiac Arrest - Contamination',
    description: 'Retired teacher suffered cardiac arrest after exposure to toxic chemicals in the lazy river. His pre-existing heart condition was exacerbated by the chemical exposure.',
    family: 'Wife Linda, children David and Susan',
    imageDescription: 'Elderly+man+memorial+photo+wearing+glasses+and+gentle+smile'
  },
  {
    name: 'Amanda Rodriguez',
    age: 28,
    status: 'deceased' as const,
    incident: 'Drowning - No Lifeguard',
    description: 'Pregnant mother drowned in the wave pool during peak hours when no lifeguards were on duty. Security cameras show her struggling for over 3 minutes with no assistance.',
    family: 'Husband Carlos, son Diego (3), unborn child',
    imageDescription: 'Young+mother+memorial+photo+holding+small+child+with+loving+expression'
  },
  {
    name: 'Tyler Brooks',
    age: 16,
    status: 'deceased' as const,
    incident: 'Equipment Malfunction',
    description: 'High school student was trapped underwater when the lazy river\'s artificial current system malfunctioned, creating a dangerous underwater vortex. Emergency shut-off systems failed.',
    family: 'Parents Kevin and Lisa Brooks, sister Ashley (18)',
    imageDescription: 'Teenage+boy+memorial+photo+in+high+school+sports+uniform'
  },
  {
    name: 'Maria Santos',
    age: 45,
    status: 'deceased' as const,
    incident: 'Toxic Exposure',
    description: 'Single mother of three died from respiratory failure after inhaling toxic fumes from improperly stored chemicals near the children\'s play area. She was supervising her children at the time.',
    family: 'Children Ana (12), Luis (9), and Sofia (6)',
    imageDescription: 'Middle+aged+woman+memorial+photo+with+warm+smile+and+three+children'
  },
  {
    name: 'James Patterson',
    age: 52,
    status: 'deceased' as const,
    incident: 'Structural Collapse',
    description: 'Construction worker visiting with his family was killed when a poorly maintained observation deck collapsed. The structure had failed multiple safety inspections.',
    family: 'Wife Nancy, sons Matthew (17) and Daniel (14)',
    imageDescription: 'Middle+aged+man+memorial+photo+with+hard+hat+and+work+clothes'
  },
  {
    name: 'Sarah Kim',
    age: 31,
    status: 'injured' as const,
    incident: 'Chemical Burns',
    description: 'Suffered severe chemical burns over 40% of her body from exposure to improperly mixed pool chemicals. Requires ongoing medical treatment and multiple surgeries.',
    family: 'Husband David, daughter Lily (7)',
    imageDescription: 'Woman+in+hospital+bed+with+bandages+showing+courage+and+determination'
  },
  {
    name: 'Michael Thompson',
    age: 42,
    status: 'injured' as const,
    incident: 'Spinal Injury',
    description: 'Paralyzed from the waist down after being thrown from a slide with broken safety mechanisms. The slide had been operating with known defects for months.',
    family: 'Wife Jessica, twin sons Alex and Ben (10)',
    imageDescription: 'Man+in+wheelchair+with+supportive+family+showing+resilience'
  },
  {
    name: 'Lisa Parker',
    age: 38,
    status: 'ill' as const,
    incident: 'Severe Illness',
    description: 'Contracted a rare waterborne illness that caused permanent liver damage. She and her family were exposed to contaminated water in multiple park areas.',
    family: 'Husband Tom, children Emma (13) and Noah (11)',
    imageDescription: 'Woman+with+family+support+showing+strength+during+illness+recovery'
  }
]

export default function Victims() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            IN MEMORIAM
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Victims of The Gooblagoon Disaster
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We remember and honor those whose lives were lost or forever changed by the negligence 
            at The Gooblagoon waterpark. Their stories fuel our fight for justice.
          </p>
        </div>

        {/* Memorial Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-red-900/30 border-red-800">
            <CardContent className="text-center py-8">
              <div className="text-4xl font-bold text-red-400 mb-2">7</div>
              <div className="text-white font-semibold">Lives Lost</div>
              <div className="text-red-200 text-sm mt-1">Ages 12-67</div>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-900/30 border-orange-800">
            <CardContent className="text-center py-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">23</div>
              <div className="text-white font-semibold">Serious Injuries</div>
              <div className="text-orange-200 text-sm mt-1">Life-changing trauma</div>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-900/30 border-yellow-800">
            <CardContent className="text-center py-8">
              <div className="text-4xl font-bold text-yellow-400 mb-2">97</div>
              <div className="text-white font-semibold">Illness Cases</div>
              <div className="text-yellow-200 text-sm mt-1">Contamination victims</div>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-900/30 border-purple-800">
            <CardContent className="text-center py-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">31</div>
              <div className="text-white font-semibold">Families Affected</div>
              <div className="text-purple-200 text-sm mt-1">Children orphaned</div>
            </CardContent>
          </Card>
        </div>

        {/* Fatalities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            <span className="mr-3">🕯️</span>
            Those We Lost
          </h2>
          <p className="text-gray-400 mb-8">
            Seven precious lives were taken due to preventable negligence. We honor their memory 
            and fight to ensure no other families suffer such devastating loss.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {victims.filter(v => v.status === 'deceased').map((victim, index) => (
              <VictimCard key={index} {...victim} />
            ))}
          </div>
        </div>

        {/* Survivors Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            <span className="mr-3">🏥</span>
            Survivors Fighting Forward
          </h2>
          <p className="text-gray-400 mb-8">
            Many survivors continue to battle long-term health effects and trauma. 
            Their courage in sharing their stories helps build our case for justice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {victims.filter(v => v.status !== 'deceased').map((victim, index) => (
              <VictimCard key={index} {...victim} />
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="bg-gray-800 border-red-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-red-400 text-center">
              The Lasting Impact
            </CardTitle>
            <CardDescription className="text-gray-400 text-center">
              Beyond the statistics, real families have been shattered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Orphaned Children</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 8 children lost one or both parents</li>
                  <li>• 3 unborn children will never meet their parents</li>
                  <li>• Multiple children witnessed their parents\' deaths</li>
                  <li>• Long-term trauma counseling required</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Medical Costs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Over $12 million in medical expenses</li>
                  <li>• 15 survivors require ongoing treatment</li>
                  <li>• 6 victims need permanent care</li>
                  <li>• Mental health treatment for families</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action for Other Victims */}
        <Card className="bg-gradient-to-r from-red-900 to-red-800 border-red-600">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Were You Also Affected?
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-3xl mx-auto">
              If you or someone you know visited The Gooblagoon and suffered any harm, 
              illness, or injury, you may be entitled to compensation. Many victims are 
              still coming forward as health effects become apparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100" asChild>
                <Link href="/contact">Share Your Story</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900" asChild>
                <Link href="/legal-team">Get Legal Help</Link>
              </Button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              All consultations are confidential and free of charge
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}