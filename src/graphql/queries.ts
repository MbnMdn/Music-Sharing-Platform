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
            trackComments
            trackLikes
            trackViews
            tracks {
                id
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


export const GET_USER = gql`
    query GetUser ($user_id: ID!){
        user(id: $user_id) {
            avatar
            created_at
            email
            trackComments
            trackLikes
            trackViews
            email_verified_at
            id
            name
            role_id
            tracks {
                cover
                duration
                file_link
                id
                likeCount
                rank
                title
                created_at
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
                id
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
            genres{
                id
                name
            }
            cover
            created_at
            duration
            file_link
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





export const GET_SONG_UPLOADER = gql`
    query GetSongUploader($song_id: ID!) {
        track(id: $song_id) {
            uploader {
                email
                id
                name
            }
        }
    }
`;



export const GET_SONG_TO_PLAY = gql`
    query GetSongToPlay($song_id: ID!) {
        track(id: $song_id) {
            artist {
                id
                name
                picture
            }
            cover
            duration
            file_link
            id
            title
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
                id
            }
        }
    }
`;


export const GET_ME = gql`
    query GetMe {
        me {
            avatar
            created_at
            email
            email_verified_at
            id
            name
            role_id
            updated_at
        }
    }
`;



export const GET_MY_ID = gql`
    query GetMe {
        me {
            id
        }
    }
`;




export const GET_ALL_USERS = gql`
    query GetAllUsers {
        users {
            avatar
            name
            id
            email_verified_at
            email
        }
    }
`;



export const GET_ALL_TRACKS = gql`
    query GetTracks {
        tracks {
            cover
            id
            title
            artist {
                id
                name
            }
        }
    }
`;




export const GET_ALL_GENRES = gql`
    query GetGenres {
        genres {
            id
            name
            picture
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
            artist {
                name
                id
            }
        }
    }
`;
