# TuneTogether - Social Streaming Platform

A modern React application for streaming songs and movies together with friends. Built with React, Tailwind CSS, Framer Motion, and React Router.

## Features

- 🎵 **Stream Songs**: Listen to music together with friends on Spotify
- 🎬 **Stream Movies**: Watch movies together from Prime Video, Netflix, YouTube, or screen share
- 💬 **Group Chat**: Real-time chat functionality for synchronized viewing/listening
- 👥 **Friend Management**: See online friends and invite them to sessions
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
tunetogether/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── MiniPlayer.jsx
│   │   ├── WaveAnimation.jsx
│   │   └── MoviePlayer.jsx
│   ├── pages/               # Page components
│   │   ├── StreamSongsPage.jsx
│   │   └── StreamMoviesPage.jsx
│   ├── data/                # Mock data
│   │   └── mockData.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Main brand color (Spotify green)
- `secondary`: Secondary background
- `accent`: Accent color (cyan)
- `dark`/`darker`: Dark theme backgrounds

### Adding New Features

1. Create new components in `src/components/`
2. Create new pages in `src/pages/`
3. Add routes in `src/App.jsx`

## License

MIT

