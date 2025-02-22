import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:PrismaAdapter(prisma),
  providers: [GithubProvider({
        clientId: process.env.AUTH_GITHUB_ID ?? 'dummy_client_id',
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? 'dummy_client_secret',
      })],
})
