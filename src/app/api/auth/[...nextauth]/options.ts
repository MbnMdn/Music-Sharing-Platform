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
            // async authorize(credentials) {
            //     const userName = credentials?.username;
            //     const password = credentials?.password;
            //
            //     const client = getClient();
            //     try {
            //         const {data} = await client.mutate({
            //             mutation: LOGIN,
            //             variables: {
            //                 // username: userName,
            //                 // password: password
            //                 username: 'Admin',
            //                 password: 'Admin'
            //             }
            //         });
            //         // cookies().set("access_token",data?.login.access_token);
            //         // cookies().set("access_token",process.env.ACCESS_TOKEN as string);
            //         cookies().set("access_token","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMGY0NTU1OGY2NmFhYjc3MjBlMDM2NTNjZDMwODdhODkyN2M2N2Q2NGNiYmFkM2UzMjBkN2JkMGJmYjA2NDQzZGM1NmJiNzNlZDg3YWVlMDIiLCJpYXQiOjE3MzI1NTM1NzEuOTkxNDc1LCJuYmYiOjE3MzI1NTM1NzEuOTkxNDc5LCJleHAiOjE3NjQwODk1NzEuOTgwOTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JB-27uPhz0UbJCiMUj98vfRw7msbsMTz8E-A4ubHWNuRpuZ6ME6e0GpFnHvfq8nn0Tzr0JvNQyunmi_9Q8yrBdUB7n1vbBrrNLZYZnR_AqPGdOuy_ySKbDwG89efmUGPui35Ht32ceo70CW_tx5F8kwxHtZlHl0WE37HNiUP8Jx1v_JPX-ALYXwvkm4NR0uVQsIqaXybxYYixzMZW2HF2DlX27dqgjJawrPWfgnvnlRaGBwrI_3u-67jPCn7WxLx9kn-dvxq94L-irK4Comlv-T08t5nQDusXiseNfBhzo_CNT0nP84tfgUnTtHF2XyHeAeqp4uiKzhC8kSD7dw5djYchGzSLNDQo_ZVMtGtyBki_o-C13DVGN5B2b6wXGyfNMP1F-799QUwXZNTDH4NRCktxgGmpkPemQbiFwh3LOwIXpZZaQok4X1kBhg4ANfe8rCsO6yWyayzaYnrqONglNXnPXi9SdklbyWNN1LftQopP2NLVRYHtpW8YO6-d7Q8C-amfuVVX1UlOeVcItRdQwxq9Y_oWyMbR2cFEVXhIWj3nU_l6JgD75jhREjU32PxthgeLK6QEF4TQs3mEGYLxqPSNjwuOI2w-G53LJ_AYCfb50tg6yH0gzvbFaYO5GAPuTVzw9uVC726fsfhiuvUwN5tCva7lV4QBaYxhklrybs");
            //         return data?.login;
            //     }catch (error){
            //         console.log(error)
            //         throw new Error((error as ApolloError).graphQLErrors[0].extensions.reason as string)
            //     }
            // }
            async authorize(credentials) {
                cookies().set("access_token","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMGY0NTU1OGY2NmFhYjc3MjBlMDM2NTNjZDMwODdhODkyN2M2N2Q2NGNiYmFkM2UzMjBkN2JkMGJmYjA2NDQzZGM1NmJiNzNlZDg3YWVlMDIiLCJpYXQiOjE3MzI1NTM1NzEuOTkxNDc1LCJuYmYiOjE3MzI1NTM1NzEuOTkxNDc5LCJleHAiOjE3NjQwODk1NzEuOTgwOTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JB-27uPhz0UbJCiMUj98vfRw7msbsMTz8E-A4ubHWNuRpuZ6ME6e0GpFnHvfq8nn0Tzr0JvNQyunmi_9Q8yrBdUB7n1vbBrrNLZYZnR_AqPGdOuy_ySKbDwG89efmUGPui35Ht32ceo70CW_tx5F8kwxHtZlHl0WE37HNiUP8Jx1v_JPX-ALYXwvkm4NR0uVQsIqaXybxYYixzMZW2HF2DlX27dqgjJawrPWfgnvnlRaGBwrI_3u-67jPCn7WxLx9kn-dvxq94L-irK4Comlv-T08t5nQDusXiseNfBhzo_CNT0nP84tfgUnTtHF2XyHeAeqp4uiKzhC8kSD7dw5djYchGzSLNDQo_ZVMtGtyBki_o-C13DVGN5B2b6wXGyfNMP1F-799QUwXZNTDH4NRCktxgGmpkPemQbiFwh3LOwIXpZZaQok4X1kBhg4ANfe8rCsO6yWyayzaYnrqONglNXnPXi9SdklbyWNN1LftQopP2NLVRYHtpW8YO6-d7Q8C-amfuVVX1UlOeVcItRdQwxq9Y_oWyMbR2cFEVXhIWj3nU_l6JgD75jhREjU32PxthgeLK6QEF4TQs3mEGYLxqPSNjwuOI2w-G53LJ_AYCfb50tg6yH0gzvbFaYO5GAPuTVzw9uVC726fsfhiuvUwN5tCva7lV4QBaYxhklrybs");
                return {
                    id: 1,
                    email: 'Admin@gmail.com',
                    name: 'Admin',
                    username: 'Admin',
                    password: 'Admin',
                    access_token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMGY0NTU1OGY2NmFhYjc3MjBlMDM2NTNjZDMwODdhODkyN2M2N2Q2NGNiYmFkM2UzMjBkN2JkMGJmYjA2NDQzZGM1NmJiNzNelD4uLi."
                };
            }
        })
    ]
}