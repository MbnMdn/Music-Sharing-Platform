import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: 'http://192.168.158.179:8000/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;