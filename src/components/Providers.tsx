'use client'

import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

export const Providers = ({children}: { children: React.ReactNode }) => {
    const client = new ApolloClient({
        uri: 'http://192.168.158.179:8000/graphql',
        cache: new InMemoryCache(),
    });
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}