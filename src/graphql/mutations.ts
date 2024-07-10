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

export const CREATE_COMMENT = gql`
    mutation CreateComment($body: String!, $track_id: ID!){
        createComment(body: $body, track_id: $track_id){
            status
            message
        }
    }
`;

export const UPLOAD_SONG = gql`
    mutation UploadSong($title: String!, $duration: Int!, $file: Upload!, $cover: Upload!, $artist_id: ID!, $rank: Int!) {
        uploadSong(
            input: {title: $title, duration: $duration, file: $file, cover: $cover, artist_id: $artist_id, rank: $rank}
        ) {
            message
            status
        }
    }
`;