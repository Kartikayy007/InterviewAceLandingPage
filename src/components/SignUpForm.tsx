'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, SignUpForm } from '@/lib/schemas'
import { signUp } from '@/lib/auth-actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
    },
  })

  async function onSubmit(data: SignUpForm) {
    setIsLoading(true)
    try {
      const result = await signUp(data)
      toast.success(result.message)
      form.reset()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to sign up')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border-none rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Create Account</h2>
        <p className="text-gray-300 text-sm">
          Join InterviewAce to get started
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 border-0 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="Enter your email" 
                    {...field} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 border-0 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password"
                    placeholder="Enter your password" 
                    {...field} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 border-0 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Confirm Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password"
                    placeholder="Confirm your password" 
                    {...field} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 border-0 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
