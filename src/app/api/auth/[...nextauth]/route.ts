import { authOptions } from '@/lib/next-auth/auth.config'
import NextAuth from 'next-auth'

const handler = NextAuth({
	adapter: authOptions.adapter,
	providers: authOptions.providers,
	callbacks: {
		async session({ session, user }) {
			if (session?.user) {
				session.user.id = user.id
			}

			return session
		},
	},
})

export { handler as GET, handler as POST }
