import {gql} from "@apollo/client";

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(input: {username: $username, password: $password}) {
            access_token
            expires_in
            refresh_token
            token_type
            user {
                email
                id
                name
            }
        }
    }
`;