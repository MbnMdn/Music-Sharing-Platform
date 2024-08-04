# Music Sharing Platform

This project is a music sharing platform built with Next.js and Tailwind CSS. Users can upload, share, and interact with songs on the platform.

## Features

- **User Profiles**: Each user has a profile page displaying their uploaded songs.
- **Song Upload**: Users can upload songs which are displayed on their profile pages after admin approval.
- **Comments**: Users can comment on songs. Comments are subject to admin approval before being displayed.
- **Trending Songs**: A section dedicated to trending songs based on popularity and user interactions.
- **Favorites and Playlists**: Users can add songs to their favorites and create playlists to listen to later.
- **Song Details Page**: Displays song lyrics, artist name, uploader's name, release date, view count, and comments.
- **User Metrics**: Each user's profile displays the total number of comments on their songs and the total views their songs have received.
- **Admin Controls**: Admins can approve or reject new song uploads and comments, as well as block or delete songs and users.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
