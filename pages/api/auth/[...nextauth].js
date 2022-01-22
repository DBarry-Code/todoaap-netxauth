import NextAuth from "next-auth";
import Providers from "next-auth/providers";

//import EmailProvider from "next-auth/providers/email";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        // OAuth authentication providers...
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // email sign in
    ],
    pages: {
        signIn: "/login",
    },

    // MongoDB
    database: process.env.DATABASE_URL,
});
