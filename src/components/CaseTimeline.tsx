'use client'

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'incident' | 'legal' | 'evidence'
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'June 15, 2021',
    title: 'First Safety Violation Report',
    description: 'State inspectors document 23 critical safety violations. Management ignores recommendations.',
    type: 'evidence'
  },
  {
    date: 'August 3, 2021',
    title: 'Environmental Contamination Begins',
    description: 'Illegal dumping of park waste into local waterways first documented by environmental groups.',
    type: 'evidence'
  },
  {
    date: 'March 12, 2022',
    title: 'Employee Whistleblower Testimony',
    description: 'Former safety manager reveals systematic cover-up of maintenance issues and safety concerns.',
    type: 'evidence'
  },
  {
    date: 'July 4, 2023',
    title: 'The Deadly Weekend',
    description: 'Independence Day weekend sees 3 fatalities and 12 serious injuries in a 48-hour period.',
    type: 'incident'
  },
  {
    date: 'July 20, 2023',
    title: 'Additional Fatalities',
    description: '4 more deaths occur due to contaminated water and equipment failures. Park remains open.',
    type: 'incident'
  },
  {
    date: 'August 1, 2023',
    title: 'Emergency Closure',
    description: 'State authorities force immediate closure after health department finds toxic contamination.',
    type: 'legal'
  },
  {
    date: 'September 15, 2023',
    title: 'Class Action Lawsuit Filed',
    description: 'Major law firm files comprehensive lawsuit representing 89 victims and families.',
    type: 'legal'
  },
  {
    date: 'January 10, 2024',
    title: 'Criminal Charges Filed',
    description: 'District Attorney files criminal negligence charges against park executives.',
    type: 'legal'
  },
  {
    date: 'March 1, 2024',
    title: 'Discovery Phase Begins',
    description: 'Internal documents reveal deliberate concealment of safety issues dating back 5 years.',
    type: 'legal'
  },
  {
    date: 'Present',
    title: 'Active Litigation',
    description: 'Case proceeds with additional victims coming forward. Settlement negotiations ongoing.',
    type: 'legal'
  }
]

export default function CaseTimeline() {
  const getEventColor = (type: string) => {
    switch (type) {
      case 'incident':
        return 'bg-red-600 border-red-400'
      case 'legal':
        return 'bg-blue-600 border-blue-400'
      case 'evidence':
        return 'bg-yellow-600 border-yellow-400'
      default:
        return 'bg-gray-600 border-gray-400'
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'incident':
        return '⚠️'
      case 'legal':
        return '⚖️'
      case 'evidence':
        return '📋'
      default:
        return '📅'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-800"></div>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full border-4 ${getEventColor(event.type)} flex items-center justify-center text-white text-xl z-10`}>
                {getEventIcon(event.type)}
              </div>
              
              {/* Event content */}
              <div className="ml-6 flex-grow">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-red-800 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <span className="text-red-400 font-medium text-sm">{event.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'incident' ? 'bg-red-900 text-red-200' :
                      event.type === 'legal' ? 'bg-blue-900 text-blue-200' :
                      'bg-yellow-900 text-yellow-200'
                    }`}>
                      {event.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}