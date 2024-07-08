'use client'

import React from 'react';
import {SessionProvider, useSession} from "next-auth/react";
import {setContext} from "@apollo/client/link/context";
import {ApolloWrapper} from "@/lib/apollo-wrapper";

export const Providers = ({children}: { children: React.ReactNode }) => {

    return <SessionProvider>
        <ApolloWrapper>{children}</ApolloWrapper>
    </SessionProvider>
}