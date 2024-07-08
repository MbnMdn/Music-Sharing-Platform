import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id: number;
        email: string;
        name: string;
    }
    interface Session {
        user : {
            access_token: string;
            expires_in: number;
            refresh_token: string;
            user: User
        }
    }
}