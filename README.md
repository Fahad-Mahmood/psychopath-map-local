# Psychopath Web (Map Viewer)

The interactive geospatial map viewer for the Psychopath platform, delivering high-performance theme park map tiles, points of interest (POIs), and attraction overlays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router with Turbopack)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) & [NextUI](https://nextui.org/)
- **Mapping Libraries**: [Leaflet](https://leafletjs.com/), [React-Leaflet](https://react-leaflet.js.org/), [Leaflet-Draw](https://github.com/Leaflet/Leaflet.draw), [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 📋 Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` or `yarn`

---

## 🚀 Local Setup & Development

### 1. Configure Environment Variables

```bash
cp .env.example .env
```

Configure your `.env` file:
```env
NEXT_PUBLIC_TILE_LAYER_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```
*(Or specify your dedicated custom park map tile server URL).*

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
# Start with Turbopack acceleration
npm run dev
```

The application will be accessible at:
👉 **`http://localhost:3000`**

### 4. Production Build

```bash
npm run build
npm run start
```

---

## 📱 Mobile App Integration

This web application serves as the primary map layer and is embedded within the `psychopath-mobile-app` via a React Native WebView pointing to `EXPO_PUBLIC_MAP_URL` (`http://localhost:3000` during local development).