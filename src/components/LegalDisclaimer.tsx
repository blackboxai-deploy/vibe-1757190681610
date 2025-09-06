export default function LegalDisclaimer() {
  return (
    <footer className="bg-gray-800 border-t border-red-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-2">Legal Disclaimer</h3>
            <p className="text-gray-400 text-sm">
              This website contains information about ongoing litigation against The Gooblagoon waterpark. 
              The information provided is for informational purposes only and does not constitute legal advice. 
              Past results do not guarantee future outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-red-400 font-semibold mb-2">Contact Information</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>📞 Legal Hotline: (555) LAWSUIT</p>
              <p>📧 info@gooblagoon-lawsuit.com</p>
              <p>📍 123 Justice Blvd, Legal District</p>
              <p className="text-red-400 font-medium mt-2">24/7 Case Consultation Available</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Gooblagoon Legal Action Team. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span className="text-gray-500 text-xs">Case Status: Active Litigation</span>
              <span className="text-red-400 text-xs">Attorney Advertising</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}