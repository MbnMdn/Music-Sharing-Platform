import {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import {getClient} from "@/lib/apollo";
import {LOGIN} from "@/graphql/mutations";
import {ApolloError} from "@apollo/client";
import {cookies} from "next/headers";

export const options: NextAuthOptions = {
    pages: {
        signIn: "/auth",
        error: "/auth"
    },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token}) {
            session.user = token as any;
            return session;
        },
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
            async authorize(credentials) {
                const userName = credentials?.username;
                const password = credentials?.password;

                const client = getClient();
                try {
                    const {data} = await client.mutate({
                        mutation: LOGIN,
                        variables: {
                            username: userName,
                            password: password
                        }
                    });
                    cookies().set("access_token",data?.login.access_token);
                    return data?.login;
                }catch (error){
                    console.log(error)
                    throw new Error((error as ApolloError).graphQLErrors[0].extensions.reason as string)
                }

            }
        })

    ]
}