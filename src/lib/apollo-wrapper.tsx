"use client";
// ^ this file needs the "use client" pragma

import {from, HttpLink} from "@apollo/client";
import {ApolloClient, ApolloNextAppProvider, InMemoryCache,} from "@apollo/experimental-nextjs-app-support";
import React from "react";
import {useSession} from "next-auth/react";
import {setContext} from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import {Session} from "next-auth";

// have a function to create a client for you

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
                authorization: session ? `Bearer ${session}` : "",
            }
        }
    });

    const httpLink = createUploadLink({
        // uri: 'http://192.168.158.179:8000/graphql',
        uri: 'https://songapi.anilist.top/graphql'
    });

    // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
    return new ApolloClient({
        // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
        cache: new InMemoryCache(),
        link: from([authLink, httpLink]),
    });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    const data = getClientSideCookie('access_token');
    return (
        <ApolloNextAppProvider makeClient={() => makeClient(data)}>
            {children}
        </ApolloNextAppProvider>
    );
}