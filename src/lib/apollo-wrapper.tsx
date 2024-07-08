"use client";
// ^ this file needs the "use client" pragma

import {from, HttpLink} from "@apollo/client";
import {ApolloClient, ApolloNextAppProvider, InMemoryCache,} from "@apollo/experimental-nextjs-app-support";
import React from "react";
import {useSession} from "next-auth/react";
import {setContext} from "@apollo/client/link/context";
import {Session} from "next-auth";

// have a function to create a client for you

export const getClientSideCookie = (name: string): string | undefined => {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
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
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: 'http://localhost:8000/graphql',
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        // you can override the default `fetchOptions` on a per query basis
        // via the `context` property on the options passed as a second argument
        // to an Apollo Client data fetching hook, e.g.:
        // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
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