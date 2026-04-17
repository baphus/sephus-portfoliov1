# Josephus Sarsonas Portfolio

A modern, interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Spotify Integration Setup

To get your Spotify "Now Playing" status working, you need to add these environment variables to your deployment (e.g., Vercel):

1.  **SPOTIFY_CLIENT_ID**: Your App's Client ID from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2.  **SPOTIFY_CLIENT_SECRET**: Your App's Client Secret.
3.  **SPOTIFY_REFRESH_TOKEN**: A token that allows the app to fetch new access tokens without user interaction.

### How to get a Refresh Token:

1.  Go to your Spotify Developer Dashboard and edit your app.
2.  Add `https://sephus-portfoliov1.vercel.app/` (or `http://localhost:3000` for local dev) to the **Redirect URIs** list.
3.  Use a tool like [Spotify Token Generator](https://spotify-token-generator.vercel.app/) or follow the Authorization Code Flow to get the `refresh_token` using the scopes: `user-read-currently-playing` and `user-read-recently-played`.

## Tech Stack
- **Framework:** Next.js 15
- **Styling:** Tailwind CSS + ShadCN/UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
