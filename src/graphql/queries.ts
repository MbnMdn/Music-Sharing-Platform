import {gql} from '@apollo/client'

export const GET_ARTIST = gql`
    query GetArtist($artist_id: ID!) {
        artist(id: $artist_id) {
            name
            created_at
            id
            like_count
            picture
            tracks {
                cover
                created_at
                duration
                file_link
                likeCount
                title
                viewCount
            }
        }
    }
`;

export const GET_TRENDING = gql`
    query GetTrendingSongs($limit:Int!) {
        trendingTracks(limit: $limit) {
            cover
            title
            id
            artist {
                name
            }
        }
    }
`;




export const GET_SONG = gql`
    query GetSong($song_id: ID!) {
        track(id: $song_id) {
            cover
            created_at
            duration
            file_link
            id
            likeCount
            rank
            title
            uploader {
                name
                id
            }
            viewCount
            artist {
                picture
                id
                name
            }
        }
    }
`;














