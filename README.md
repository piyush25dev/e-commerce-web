# SoundScape - Modern Music Player

A premium, responsive music player built with **Next.js 14**, **Material-UI (MUI)**, and **JioSaavn API** integration. Features glassmorphism design, dark/light theme toggle, and full music playback capabilities.

## ✨ Features

- 🎵 **Music Search & Playback** - Search and play songs from JioSaavn
- 🎨 **Glassmorphism Design** - Modern UI with blur effects and gradients
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⏱️ **Playback Controls** - Play, pause, skip, shuffle, and repeat
- 🔊 **Volume Control** - Adjustable volume slider
- 📝 **Lyrics Display** - View song lyrics in real-time
- 🎵 **Playlist Management** - Queue and manage multiple songs
- ❤️ **Favorites** - Mark favorite songs
- 📊 **Progress Tracking** - Visual progress bar with time display

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (React 18)
- **UI Library**: Material-UI (MUI) 5
- **Styling**: Emotion (MUI's default CSS-in-JS)
- **Icons**: MUI Icons
- **API**: JioSaavn API
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone or create the project

```bash
# Create new directory
mkdir e-com-web
cd e-com-web
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### 4. Build for production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
e-com-web/
├── app/
│   ├── layout.js           # Root layout
│   └── page.js             # Main page
├── components/
│   └── SongPlayer.jsx      # Main player component
├── package.json            # Dependencies
├── next.config.js          # Next.js config
└── README.md              # This file
```

## 🎮 Usage Guide

### Searching for Songs

1. Click on the search bar at the top
2. Type song name, artist, or album
3. Results appear automatically
4. Click on a song to add it to the queue

### Playback Controls

- **Play/Pause**: Click the large circular button in the center
- **Skip Next**: Click the forward arrow
- **Skip Previous**: Click the backward arrow (or restart current song if >3 sec played)
- **Volume**: Use the volume slider at the bottom
- **Progress**: Click or drag the progress bar to seek

### Features

- **Shuffle**: Toggle random playback
- **Repeat**: Toggle single song repeat
- **Playlist**: View all queued songs in the Playlist tab
- **Lyrics**: View song lyrics in the Lyrics tab
- **Favorites**: Click the heart icon to mark favorites
- **Theme**: Toggle dark/light mode with the sun/moon button

## 🎨 Customization

### Change Colors

Edit the theme colors in `components/SongPlayer.jsx`:

```javascript
primary: {
  main: mode === 'dark' ? '#00d4ff' : '#0088cc',
  // Change these hex colors
},
secondary: {
  main: mode === 'dark' ? '#ff006e' : '#ff1493',
  // Change these hex colors
},
```

### Modify Fonts

Update the typography in `createAppTheme()`:

```javascript
typography: {
  fontFamily: '"Your Font", sans-serif',
  // Change font family
},
```

### Adjust Responsive Breakpoints

MUI provides built-in breakpoints:

```javascript
useMediaQuery(muiTheme.breakpoints.down('sm'))  // Mobile
useMediaQuery(muiTheme.breakpoints.down('md'))  // Tablet
useMediaQuery(muiTheme.breakpoints.down('lg'))  // Large screens
```

## 🔌 API Endpoints Used

### Search Songs
```
https://www.jiosaavn.com/api.php?__call=autocomplete.get&query={query}
```

### Get Song Details
```
https://www.jiosaavn.com/api.php?__call=song.getDetails&pids={songId}
```

### Get Album Details
```
https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&albumid={albumId}
```

### Get Playlist Details
```
https://www.jiosaavn.com/api.php?__call=playlist.getDetails&listid={playlistId}
```

### Get Lyrics
```
https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&lyrics_id={lyricsId}
```

## ⚠️ Important Notes

### Audio Playback

- Direct playback may be restricted by CORS policies
- Some songs may have regional restrictions
- Browser autoplay policies may prevent auto-play on first visit
- Use HTTPS for production deployment

### Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE 11: ❌ Not supported

## 🐛 Troubleshooting

### Songs Won't Play
- Check browser console for CORS errors
- Ensure you're using HTTPS in production
- Try a different song from a different region
- Check if song has playback restrictions

### Search Not Working
- Verify internet connection
- Check browser network tab for API errors
- Clear browser cache and try again
- Some songs may not be available in your region

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Reinstall MUI: `npm install @mui/material`
- Ensure all MUI peer dependencies are installed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Start server
npm start
```

## 📝 Environment Variables

Create a `.env.local` file if needed for configuration:

```env
# Currently no environment variables required
# Add any future API keys or config here
```

## 🎯 Performance Optimization

- Images are lazy-loaded
- Debounced search (500ms)
- Efficient re-rendering with React hooks
- MUI components are tree-shakeable

## 🔐 Security

- No sensitive data stored locally
- API requests are read-only
- No authentication required
- CORS-compliant API usage

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check browser console for errors
4. Verify your internet connection

## 🎵 Credits

- **Music API**: JioSaavn
- **UI Library**: Material-UI
- **Framework**: Next.js
- **Icons**: Google Material Icons

---

**Made with ♪ for music lovers**