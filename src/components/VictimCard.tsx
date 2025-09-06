import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface VictimCardProps {
  name: string
  age: number
  status: 'deceased' | 'injured' | 'ill'
  incident: string
  description: string
  family?: string
  imageDescription: string
}

export default function VictimCard({ 
  name, 
  age, 
  status, 
  incident, 
  description, 
  family,
  imageDescription 
}: VictimCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'deceased':
        return <Badge variant="destructive">Deceased</Badge>
      case 'injured':
        return <Badge className="bg-orange-600">Injured</Badge>
      case 'ill':
        return <Badge className="bg-yellow-600">Illness</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-red-800 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white text-lg">{name}</CardTitle>
            <CardDescription className="text-gray-400">
              Age {age} • {incident}
            </CardDescription>
          </div>
          {getStatusBadge(status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <img 
            src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41dc9e49-af31-40bb-937b-8a7c07d250d1.png '+')}`}
            alt={imageDescription}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {description}
        </p>
        {family && (
          <p className="text-gray-400 text-sm italic">
            Survived by: {family}
          </p>
        )}
      </CardContent>
    </Card>
  )
}