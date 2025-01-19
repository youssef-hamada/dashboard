import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import dbConnect from "./lib/util/mongo";
import { User } from "./lib/util/models";
import Credentials from "next-auth/providers/credentials";

const login = async (credentials) => {
  try {
    dbConnect();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("wrong creds");

    const isPasswordCorrect = credentials.password == user.password;
    if (!isPasswordCorrect) throw new Error("wrong creds");
    console.log(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        console.log("Authorizing user:", credentials);
        const user = await login(credentials);
        console.log("User authorized:", user);
        if (
          user &&
          credentials.username === "test" &&
          credentials.password === "password"
        ) {
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
