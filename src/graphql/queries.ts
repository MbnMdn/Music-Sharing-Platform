import {gql} from '@apollo/client'

export const GET_ARTIST = gql`
    query GetArtist($artist_id: ID!) {
        artist(id: $artist_id) {
            name
            created_at
            id
            like_count
            picture
            header_image
            tracks {
                cover
                created_at
                duration
                file_link
                likeCount
                title
                viewCount
                artist {
                    name
                    id
                }
            }
        }
    }
`;

export const GET_TRENDING = gql`
    query GetTrendingSongs($limit: Int!) {
        trendingTracks(limit: $limit) {
            cover
            title
            id
            artist {
                name
            }
            duration
            viewCount
            likeCount
            rank
        }
    }
`;








export const GET_SONG = gql`
    query GetSong($song_id: ID!) {
        track(id: $song_id) {
            artist {
                created_at
                id
                header_image
                like_count
                name
                picture
            }
            comments {
                body
                created_at
                id
                track_id
                user {
                    avatar
                    email
                    id
                    name
                }
                user_id
            }
            cover
            created_at
            duration
            file_link
            genres {
                id
                name
                picture
            }
            id
            likeCount
            rank
            title
            uploader {
                email
                id
                name
            }
            viewCount
        }
    }
`;


export const GET_RECENTLY_PLAYED = gql`
    query GetRecentlyPlayed {
        getRecentlyViewedSongs {
            id
            cover
            duration
            file_link
            likeCount
            viewCount
            title
            artist {
                name
            }
        }
    }
`;


export const GET_ALL_ARTISTS = gql`
    query GetAllArtists {
        artists {
            picture
            name
            like_count
            id
            created_at
            tracks {
                cover
                created_at
                duration
                file_link
                id
                likeCount
                rank
                title
                viewCount
                uploader {
                    email
                    id
                    name
                }
                artist {
                    created_at
                    id
                    like_count
                    name
                    picture
                }
            }
        }
    }
`;




export const GET_MOSTLY_PLAYED = gql`
    query GetMostlyPlayed {
        getMostlyPlayedSongs {
            cover
            created_at
            duration
            file_link
            genres {
                id
                name
                picture
            }
            id
            likeCount
            rank
            title
            uploader {
                email
                id
                name
            }
            viewCount
        }
    }
`;