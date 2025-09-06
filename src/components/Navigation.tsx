'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/case-overview', label: 'Case Overview' },
    { href: '/evidence', label: 'Evidence' },
    { href: '/victims', label: 'Victims' },
    { href: '/legal-team', label: 'Legal Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-gray-800 border-b border-red-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-red-500 font-bold text-xl">⚖️</div>
            <div>
              <div className="text-white font-bold text-lg">Gooblagoon Lawsuit</div>
              <div className="text-red-400 text-xs">Legal Action Pending</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-red-900/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="destructive" 
                size="sm"
                className="ml-4 bg-red-600 hover:bg-red-700"
              >
                File Claim
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-800 text-white border-l border-red-800">
                <SheetTitle className="text-white mb-4">Navigation</SheetTitle>
                <div className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:bg-red-900/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button 
                    variant="destructive" 
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 mt-4"
                  >
                    File Claim
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}