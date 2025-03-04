import NextAuth from 'next-auth/next'
import { authOptions } from './auth.config'

export const { handler } = NextAuth(authOptions)
