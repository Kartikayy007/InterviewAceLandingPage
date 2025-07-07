'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { SignInForm } from './SignInForm'
import { SignUpForm } from './SignUpForm'
import { WaitlistForm } from './WaitlistForm'

interface AuthModalProps {
  children: React.ReactNode
  defaultMode?: 'signin' | 'signup' | 'waitlist'
}

export function AuthModal({ children, defaultMode = 'waitlist' }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup' | 'waitlist'>(defaultMode)
  const [open, setOpen] = useState(false)

  const renderForm = () => {
    switch (mode) {
      case 'signin':
        return <SignInForm />
      case 'signup':
        return <SignUpForm />
      case 'waitlist':
        return <WaitlistForm />
    }
  }

  const getTitle = () => {
    switch (mode) {
      case 'signin':
        return 'Sign In'
      case 'signup':
        return 'Create Account'
      case 'waitlist':
        return 'Join Waitlist'
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-4">
          {renderForm()}
          
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              variant={mode === 'waitlist' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMode('waitlist')}
              className={`text-xs ${mode === 'waitlist' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 border-white/30 text-white hover:bg-white/30'}`}
            >
              Waitlist
            </Button>
            <Button
              variant={mode === 'signin' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMode('signin')}
              className={`text-xs ${mode === 'signin' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 border-white/30 text-white hover:bg-white/30'}`}
            >
              Sign In
            </Button>
            <Button
              variant={mode === 'signup' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMode('signup')}
              className={`text-xs ${mode === 'signup' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 border-white/30 text-white hover:bg-white/30'}`}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
