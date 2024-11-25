"use client";

import {from, HttpLink} from "@apollo/client";
import {ApolloClient, ApolloNextAppProvider, InMemoryCache,} from "@apollo/experimental-nextjs-app-support";
import React from "react";
import {useSession} from "next-auth/react";
import {setContext} from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import {Session} from "next-auth";

export const getClientSideCookie = (name: string): string | undefined => {
    if(typeof document !== 'undefined'){
        return document.cookie
            .split('; ')
            .find((row) => row.startsWith(`${name}=`))
            ?.split('=')[1];
    }
    return undefined;
};

function makeClient(session : string | undefined) {

    const authLink = setContext(async (_, {headers}) => {
        return {
            headers: {
                ...headers,
                authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMGY0NTU1OGY2NmFhYjc3MjBlMDM2NTNjZDMwODdhODkyN2M2N2Q2NGNiYmFkM2UzMjBkN2JkMGJmYjA2NDQzZGM1NmJiNzNlZDg3YWVlMDIiLCJpYXQiOjE3MzI1NTM1NzEuOTkxNDc1LCJuYmYiOjE3MzI1NTM1NzEuOTkxNDc5LCJleHAiOjE3NjQwODk1NzEuOTgwOTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JB-27uPhz0UbJCiMUj98vfRw7msbsMTz8E-A4ubHWNuRpuZ6ME6e0GpFnHvfq8nn0Tzr0JvNQyunmi_9Q8yrBdUB7n1vbBrrNLZYZnR_AqPGdOuy_ySKbDwG89efmUGPui35Ht32ceo70CW_tx5F8kwxHtZlHl0WE37HNiUP8Jx1v_JPX-ALYXwvkm4NR0uVQsIqaXybxYYixzMZW2HF2DlX27dqgjJawrPWfgnvnlRaGBwrI_3u-67jPCn7WxLx9kn-dvxq94L-irK4Comlv-T08t5nQDusXiseNfBhzo_CNT0nP84tfgUnTtHF2XyHeAeqp4uiKzhC8kSD7dw5djYchGzSLNDQo_ZVMtGtyBki_o-C13DVGN5B2b6wXGyfNMP1F-799QUwXZNTDH4NRCktxgGmpkPemQbiFwh3LOwIXpZZaQok4X1kBhg4ANfe8rCsO6yWyayzaYnrqONglNXnPXi9SdklbyWNN1LftQopP2NLVRYHtpW8YO6-d7Q8C-amfuVVX1UlOeVcItRdQwxq9Y_oWyMbR2cFEVXhIWj3nU_l6JgD75jhREjU32PxthgeLK6QEF4TQs3mEGYLxqPSNjwuOI2w-G53LJ_AYCfb50tg6yH0gzvbFaYO5GAPuTVzw9uVC726fsfhiuvUwN5tCva7lV4QBaYxhklrybs"
            }
        }
    });

    const httpLink = createUploadLink({
        // uri: 'http://192.168.158.179:8000/graphql',
        uri: 'https://songapi.alplayer.ir/graphql'
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: from([authLink, httpLink]),
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    // const data = getClientSideCookie('access_token');
    const data = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMGY0NTU1OGY2NmFhYjc3MjBlMDM2NTNjZDMwODdhODkyN2M2N2Q2NGNiYmFkM2UzMjBkN2JkMGJmYjA2NDQzZGM1NmJiNzNlZDg3YWVlMDIiLCJpYXQiOjE3MzI1NTM1NzEuOTkxNDc1LCJuYmYiOjE3MzI1NTM1NzEuOTkxNDc5LCJleHAiOjE3NjQwODk1NzEuOTgwOTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JB-27uPhz0UbJCiMUj98vfRw7msbsMTz8E-A4ubHWNuRpuZ6ME6e0GpFnHvfq8nn0Tzr0JvNQyunmi_9Q8yrBdUB7n1vbBrrNLZYZnR_AqPGdOuy_ySKbDwG89efmUGPui35Ht32ceo70CW_tx5F8kwxHtZlHl0WE37HNiUP8Jx1v_JPX-ALYXwvkm4NR0uVQsIqaXybxYYixzMZW2HF2DlX27dqgjJawrPWfgnvnlRaGBwrI_3u-67jPCn7WxLx9kn-dvxq94L-irK4Comlv-T08t5nQDusXiseNfBhzo_CNT0nP84tfgUnTtHF2XyHeAeqp4uiKzhC8kSD7dw5djYchGzSLNDQo_ZVMtGtyBki_o-C13DVGN5B2b6wXGyfNMP1F-799QUwXZNTDH4NRCktxgGmpkPemQbiFwh3LOwIXpZZaQok4X1kBhg4ANfe8rCsO6yWyayzaYnrqONglNXnPXi9SdklbyWNN1LftQopP2NLVRYHtpW8YO6-d7Q8C-amfuVVX1UlOeVcItRdQwxq9Y_oWyMbR2cFEVXhIWj3nU_l6JgD75jhREjU32PxthgeLK6QEF4TQs3mEGYLxqPSNjwuOI2w-G53LJ_AYCfb50tg6yH0gzvbFaYO5GAPuTVzw9uVC726fsfhiuvUwN5tCva7lV4QBaYxhklrybs"
    return (
        <ApolloNextAppProvider makeClient={() => makeClient(data)}>
            {children}
        </ApolloNextAppProvider>
    );
}