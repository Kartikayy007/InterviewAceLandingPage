'use server'

import { createClient } from '@/lib/supabase/server'
import { SignInForm, SignUpForm, WaitlistForm } from '@/lib/schemas'

export async function signUp(formData: SignUpForm) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        full_name: formData.fullName,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    }
  })

  if (error) {
    throw new Error(error.message)
  }

  return { success: true, message: 'Check your email to confirm your account' }
}

export async function signIn(formData: SignInForm) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return { success: true, message: 'Successfully signed in!' }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  return { success: true, message: 'Successfully signed out!' }
}

export async function addToWaitlist(formData: WaitlistForm) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('waitlist')
    .insert([
      {
        email: formData.email,
        full_name: formData.fullName,
        profession: formData.profession,
        country: formData.country,
        created_at: new Date().toISOString(),
      }
    ])

  if (error) {
    throw new Error(error.message)
  }

  return { success: true, message: 'Successfully added to waitlist!' }
}

export async function resetPassword(email: string) {
  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  })

  if (error) {
    throw new Error(error.message)
  }

  return { success: true, message: 'Check your email for reset instructions' }
}

export async function downloadMacApp(userAgent?: string) {
  const supabase = await createClient()

  // Record the download in Supabase
  const { error } = await supabase
    .from('mac_downloads')
    .insert([
      {
        user_agent: userAgent ?? null,
        created_at: new Date().toISOString(),
      },
    ])

  if (error) {
    throw new Error(error.message)
  }

  return {
    success: true,
    downloadUrl: '/downloads/InterviewAce.dmg', // Replace with your hosted DMG URL
    message: 'Download started successfully!'
  }
}
