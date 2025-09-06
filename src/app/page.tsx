import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c1ba216-d003-4ea1-965e-c113ba6914b8.png" 
            alt="Aerial view of The Gooblagoon waterpark showing safety violations and debris"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            ACTIVE LAWSUIT
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The Gooblagoon
            <span className="block text-red-400">Waterpark Disaster</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Multiple fatalities, countless injuries, and environmental destruction due to gross negligence. 
            We are seeking justice for victims and their families.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">7</div>
              <div className="text-gray-300">Confirmed Deaths</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">23</div>
              <div className="text-gray-300">Serious Injuries</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">156</div>
              <div className="text-gray-300">Safety Violations</div>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">$50M</div>
              <div className="text-gray-300">Damages Sought</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">File Your Claim Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-red-800 text-red-400 hover:bg-red-950" asChild>
              <Link href="/case-overview">View Case Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-red-900 text-white py-3 overflow-hidden">
        <div className="animate-pulse">
          <div className="flex items-center space-x-8 text-sm font-medium">
            <span className="bg-red-600 px-3 py-1 rounded">BREAKING</span>
            <span>New evidence reveals systematic safety failures dating back 3 years</span>
            <span>•</span>
            <span>Additional victims come forward with testimonies</span>
            <span>•</span>
            <span>Environmental contamination confirmed by state inspectors</span>
          </div>
        </div>
      </section>

      {/* Case Overview Cards */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            The Case Against <span className="text-red-400">The Gooblagoon</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-red-800 hover:border-red-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400 text-xl">Safety Negligence</CardTitle>
                <CardDescription className="text-gray-400">
                  Critical safety violations that led to preventable deaths
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0556723f-05bb-4af4-905d-543d46283d70.png" 
                  alt="Broken safety barriers and missing warning signs at Gooblagoon waterpark"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li>• Broken safety barriers on high slides</li>
                  <li>• Missing lifeguards at critical zones</li>
                  <li>• Faulty emergency shut-off systems</li>
                  <li>• Ignored inspection warnings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-red-800 hover:border-red-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400 text-xl">Environmental Disaster</CardTitle>
                <CardDescription className="text-gray-400">
                  Massive waste and contamination affecting the community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e280ff1f-734a-4336-9c70-711b0c1ebd93.png" 
                  alt="Massive piles of trash and debris scattered throughout Gooblagoon waterpark grounds"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li>• Toxic waste dumping in local waterways</li>
                  <li>• Trash accumulation creating health hazards</li>
                  <li>• Chemical contamination of pool systems</li>
                  <li>• Illegal disposal practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-red-800 hover:border-red-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400 text-xl">Corporate Cover-Up</CardTitle>
                <CardDescription className="text-gray-400">
                  Evidence of deliberate concealment of safety issues
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0662306-8891-4382-ad85-15331439e802.png" 
                  alt="Corporate documents and internal emails revealing cover-up of safety violations"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li>• Internal memos acknowledging dangers</li>
                  <li>• Falsified safety inspection reports</li>
                  <li>• Threats to whistleblower employees</li>
                  <li>• Destroyed evidence attempts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Were You or Your Family Affected?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            If you or a loved one visited The Gooblagoon waterpark and suffered injuries, illness, or worse, 
            you may be entitled to compensation. Our legal team is here to help you seek justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-red-900 hover:bg-gray-100" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-red-900" asChild>
              <Link href="/victims">View Victim Stories</Link>
            </Button>
          </div>
          
          <div className="mt-8 text-red-100 text-sm">
            <p>No fees unless we win your case • Available 24/7 • Confidential consultation</p>
          </div>
        </div>
      </section>
    </div>
  )
}