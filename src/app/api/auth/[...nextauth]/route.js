import { getUserByEmailAndPassword } from "@/app/actions/auth/getUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// authOptions 
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        const user = await getUserByEmailAndPassword(
          credentials.email,
          credentials.password
        );

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user && token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/register",
    error: "/auth/error",
    signOut: "/auth/signout",
    newUser: "/auth/new-user",
    verifyRequest: "/auth/verify-request",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
