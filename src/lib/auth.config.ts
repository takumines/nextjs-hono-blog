import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';

/**
 * NextAuthの設定オプションの生成
 */
export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID ?? 'dummy_client_id',
			clientSecret: process.env.AUTH_GITHUB_SECRET ?? 'dummy_client_secret',
		}),
	],
};
