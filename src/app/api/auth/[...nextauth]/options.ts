import {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    pages: {
        signIn: "/register",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                    placeholder: "username",
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "pass",
                },
            },
            async authorize(credentials){
                console.log(credentials?.username + " " + credentials?.password);
                return {id: "42"};
            }
        })

    ]
}