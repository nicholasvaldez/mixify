import { LOGIN_URL } from "@/lib/spotify"
import NextAuth from "next-auth"
import SpoitifyProvider from "next-auth/providers/spoitify"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpoitifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
}

export default NextAuth(authOptions)
