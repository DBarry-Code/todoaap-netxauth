import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { html, text } from "../../../utils/htmlEmail";
import nodemailer from "nodemailer";

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
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
            async sendVerificationRequest({
                identifier: email,
                url,
                provider: { server, from },
            }) {
                const { host } = new URL(url);
                const transport = nodemailer.createTransport(server);
                await transport.sendMail({
                    to: email,
                    from,
                    subject: `Sign in to ${host}`,
                    text: text({ url, host }),
                    html: html({ url, host, email }),
                });
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },

    // MongoDB
    database: process.env.DATABASE_URL,
    callbacks: {
        session: async (session, user) => {
            session.userId = user.id;
            return Promise.resolve(session);
        },
    },
});
