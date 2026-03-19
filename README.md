# 🍿 usePopcorn

A responsive React movie discovery app that lets you search for films, view details, and track what you've watched — all powered by the OMDb API.

---

## 📖 Overview

usePopcorn is a single-page React application built to practice core React concepts including custom hooks, component composition, side effects, and state management. Users can search for any movie, view its IMDb rating and details, rate it themselves using an interactive star system, and maintain a personal watched list with aggregated stats.

---

## ✨ Features

- 🔍 **Live Movie Search** — Search the OMDb database in real time as you type (triggers after 3 characters)
- 🎬 **Movie Details Panel** — View poster, release date, genre, plot, cast, director, and IMDb rating
- ⭐ **Interactive Star Rating** — Rate any movie out of 10 using a custom-built `StarRating` component
- 📋 **Watched List** — Add movies to your personal watched list with your own rating stored
- 📊 **Watch Statistics** — Automatically calculates average IMDb rating, average user rating, and average runtime across all watched movies
- 📦 **Collapsible Panels** — Both the search results and watched list panels can be toggled open/closed
- ⚠️ **Error & Loading States** — Graceful handling of loading spinners and API error messages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library and component architecture |
| Create React App | Project scaffolding and build tooling |
| OMDb API | Movie data source |
| CSS3 | Custom styling |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── navbar/         # Navbar, Logo, Search input, Results count
│   ├── layout/         # Main layout wrapper, collapsible Box
│   ├── movies/         # MovieList, Movie, MovieDetails, WatchedMovieList
│   ├── watched/        # WatchedSummary with aggregated stats
│   ├── ui/             # Loader and ErrorMessage components
│   └── StarRating.js   # Reusable star rating component
├── hooks/
│   ├── useMovies.js    # Fetches movies from OMDb API
│   ├── useLocalStorage.js  # Persists watched list to localStorage
│   └── useKey.js       # Handles keyboard shortcuts
├── utils/
│   └── average.js      # Helper to compute array averages
└── App.js              # Root component with global state
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jana-ezzat/use-popcorn.git
   cd use-popcorn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🔑 API

This app uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data. The API key is included in the source for demonstration purposes. If you fork this project, you can get your own free key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx).

---

## 📚 Concepts Practiced

- Component composition and reusability
- Lifting state up
- Controlled components
- `useEffect` for data fetching with cleanup
- Custom hooks for separation of concerns
- Derived state and computed values

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
