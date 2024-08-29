import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      console.log(profile);
      return true;
    },
  },
  secret: process.env.SECRET ?? "",
});

export { handler as GET, handler as POST };
