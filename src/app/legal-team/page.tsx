import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const attorneys = [
  {
    name: 'Jonathan Morrison',
    title: 'Lead Trial Attorney',
    experience: '25 years',
    specialization: 'Wrongful Death & Personal Injury',
    achievements: [
      '$45M verdict in waterpark negligence case',
      '200+ successful personal injury cases', 
      'Named "Attorney of the Year" 2023',
      'Featured in Legal Times Top 100'
    ],
    description: 'Jonathan has dedicated his career to fighting corporate negligence and protecting victims\' rights. His aggressive litigation style and meticulous preparation have resulted in some of the largest settlements in state history.',
    imageDescription: 'Professional+attorney+in+expensive+suit+with+confident+expression+in+law+office'
  },
  {
    name: 'Rebecca Chen',
    title: 'Environmental Law Specialist',
    experience: '18 years',
    specialization: 'Environmental & Toxic Tort',
    achievements: [
      'Former EPA attorney',
      '$30M settlement vs. chemical company',
      'Expert in environmental contamination',
      'Published author on toxic tort law'
    ],
    description: 'Rebecca brings unique expertise from her time at the EPA. She understands how corporations hide environmental violations and has the technical knowledge to expose toxic contamination cases.',
    imageDescription: 'Professional+female+attorney+with+environmental+law+books+and+EPA+credentials'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Corporate Fraud Investigator',
    experience: '22 years',
    specialization: 'Corporate Misconduct & Fraud',
    achievements: [
      'Former FBI white-collar crime unit',
      'Exposed 50+ corporate cover-ups',
      '$100M+ in fraud recoveries',
      'Expert witness in federal cases'
    ],
    description: 'Michael\'s background in federal law enforcement gives him unique insight into corporate fraud schemes. He specializes in uncovering document destruction and executive misconduct.',
    imageDescription: 'Former+FBI+attorney+with+investigation+files+and+forensic+documents'
  },
  {
    name: 'Sarah Williams',
    title: 'Victim Advocacy Coordinator',
    experience: '15 years',
    specialization: 'Victim Rights & Family Support',
    achievements: [
      'Advocate for 1000+ families',
      'Trauma-informed legal approach',
      'Survivor of corporate negligence',
      'National speaker on victim rights'
    ],
    description: 'Sarah ensures victim families receive not just legal representation, but emotional support and resources. Her personal experience as a survivor drives her passionate advocacy.',
    imageDescription: 'Compassionate+female+attorney+counseling+families+in+supportive+office+environment'
  }
]

const supportTeam = [
  {
    name: 'Dr. Patricia Hayes',
    role: 'Medical Expert',
    specialty: 'Toxicology & Environmental Health',
    credential: 'MD, PhD - Harvard Medical School'
  },
  {
    name: 'James Chen, PE',
    role: 'Safety Engineering Expert',
    specialty: 'Waterpark Safety Systems',
    credential: 'Professional Engineer - 30 years experience'
  },
  {
    name: 'Maria Santos',
    role: 'Document Analysis Specialist',
    specialty: 'Corporate Evidence Review',
    credential: 'JD, CPA - Forensic Accounting'
  },
  {
    name: 'Robert Kim',
    role: 'Private Investigator',
    specialty: 'Corporate Surveillance',
    credential: 'Former Detective - 20 years law enforcement'
  }
]

export default function LegalTeam() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2">
            LEGAL POWERHOUSE
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Meet Our Legal Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A coalition of experienced attorneys, investigators, and experts dedicated to seeking 
            justice for Gooblagoon victims and holding corporate negligence accountable.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-red-900/30 border-red-800">
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-red-400 mb-2">80+</div>
              <div className="text-white font-semibold">Years Combined Experience</div>
            </CardContent>
          </Card>
          
          <Card className="bg-red-900/30 border-red-800">
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-red-400 mb-2">$500M+</div>
              <div className="text-white font-semibold">In Settlements Won</div>
            </CardContent>
          </Card>
          
          <Card className="bg-red-900/30 border-red-800">
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-white font-semibold">Success Rate</div>
            </CardContent>
          </Card>
          
          <Card className="bg-red-900/30 border-red-800">
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-white font-semibold">Client Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Lead Attorneys */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Lead Attorneys
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attorneys.map((attorney, index) => (
              <Card key={index} className="bg-gray-800 border-red-800 hover:border-red-600 transition-colors">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <img 
                      src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88539166-b906-4f28-86fd-6849cc7e52d2.png '+')}`}
                      alt={attorney.imageDescription}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-red-400 mb-1">
                        {attorney.name}
                      </CardTitle>
                      <CardDescription className="text-white font-medium">
                        {attorney.title}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-red-800 text-red-400">
                          {attorney.experience}
                        </Badge>
                        <Badge className="bg-red-600">
                          {attorney.specialization}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {attorney.description}
                  </p>
                  
                  <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {attorney.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Support Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Expert Support Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTeam.map((expert, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-800 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl mb-4">
                    🎓
                  </div>
                  <h3 className="text-white font-semibold mb-1">{expert.name}</h3>
                  <p className="text-red-400 text-sm font-medium mb-2">{expert.role}</p>
                  <p className="text-gray-300 text-sm mb-3">{expert.specialty}</p>
                  <Badge variant="outline" className="text-xs border-red-800 text-red-400">
                    {expert.credential}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Our Team */}
        <Card className="bg-gray-800 border-red-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-red-400 text-center">
              Why Choose Our Legal Team?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-gray-300 text-sm">
                      Over $500 million recovered for clients in similar cases with a 95% success rate
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    🔍
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Thorough Investigation</h3>
                    <p className="text-gray-300 text-sm">
                      Former FBI and EPA experts uncover corporate cover-ups and environmental violations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    💪
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Aggressive Representation</h3>
                    <p className="text-gray-300 text-sm">
                      We don\'t settle for less - we fight for maximum compensation for our clients
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    ❤️
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Victim-Centered Approach</h3>
                    <p className="text-gray-300 text-sm">
                      Personal support and guidance throughout the legal process, not just legal representation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    📞
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">24/7 Availability</h3>
                    <p className="text-gray-300 text-sm">
                      Round-the-clock support when you need us most, with dedicated victim advocates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                    💰
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">No Win, No Fee</h3>
                    <p className="text-gray-300 text-sm">
                      You pay nothing unless we win your case - we invest in justice, not your wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-red-900 to-red-800 border-red-600">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Fight for Justice?
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-3xl mx-auto">
              Our legal team is standing by to review your case and fight for the compensation 
              you deserve. Don\'t let corporate negligence go unpunished.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100" asChild>
                <Link href="/contact">Free Case Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                Call (555) LAWSUIT
              </Button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              Available 24/7 • No fees unless we win • Completely confidential
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}