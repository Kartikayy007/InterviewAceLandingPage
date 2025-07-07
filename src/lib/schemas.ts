import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string(),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  profession: z.string().min(2, 'Profession is required'),
  country: z.string().min(2, 'Country is required'),
})

export const resetPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type SignUpForm = z.infer<typeof signUpSchema>
export type SignInForm = z.infer<typeof signInSchema>
export type WaitlistForm = z.infer<typeof waitlistSchema>
export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>
