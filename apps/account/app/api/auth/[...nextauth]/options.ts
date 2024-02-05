import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'your-password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // https://next-auth.js.org/providers/credentials
        const user = { id: '42', username: 'jprossetti', password: 'nextauth' };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: 'consent',
    //       access_type: 'offline',
    //       response_type: 'code',
    //     },
    //   },
    // }),
  ],
  session: {
    strategy: 'jwt',
  },
};
