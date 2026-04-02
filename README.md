# Streamixx

A movie discovery and recommendation web application that helps users explore films across 8 genres through interactive selection tools.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Features

### Homepage
- Animated welcome banner with sliding background images
- **8 genre showcase sections** with embedded video previews that autoplay on scroll
- Scroll-triggered reveal animations (fade-left, fade-right)
- Dropdown navigation to access movie picker tools
- About Us section with team profiles and social links
- Contact/feedback form with email validation
- Scroll-to-top button

### Random Movie Picker
Pick a random movie from the entire database spanning all genres with a single page load.

### Random Genre Picker
Get a randomly selected genre, then choose to either:
- **Pick a random movie** from that genre
- **View the full list** of movies in that genre

### Multiple Genre Selector
Select any combination of 8 genre buttons and find movies that appear across **all** selected genres using array intersection logic. Toggle genres on/off with visual feedback.

---

## Genres

| Genre | Movies |
|-------|--------|
| Action | 62 |
| Comedy | 55 |
| Drama | 41 |
| Horror | 63 |
| Crime | 25 |
| Romance | 15 |
| Sci-Fi | 29 |
| Thriller | 83 |

---

## Project Structure

```
Streamixx/
├── index.html                      # Homepage
├── pages/
│   ├── random-pick.html            # Random movie picker
│   ├── random-genre.html           # Random genre picker
│   └── multiple-genres.html        # Multiple genre selector
├── styles/
│   ├── common.css                  # Shared base & navbar styles
│   ├── home.css                    # Homepage-specific styles
│   ├── random-pick.css             # Random pick page styles
│   ├── random-genre.css            # Random genre page styles
│   └── multiple-genres.css         # Multiple genres page styles
├── scripts/
│   ├── movies-data.js              # Shared movie database (ES module)
│   ├── home.js                     # Video autoplay & scroll animations
│   ├── random-pick.js              # Random movie selection logic
│   ├── random-genre.js             # Random genre selection logic
│   └── multiple-genres.js          # Multi-genre intersection logic
├── assets/
│   ├── images/
│   │   ├── logo/                   # Site logo & favicon
│   │   ├── about/                  # Team photos & social icons
│   │   ├── welcome/                # Welcome banner images
│   │   └── extras/                 # Feedback form image, scroll icon
│   └── videos/                     # Genre showcase video clips
└── .hintrc                         # WebHint configuration
```

---

## Tech Stack

- **HTML5** -- Semantic markup, video elements
- **CSS3** -- Flexbox, keyframe animations, media queries, responsive design
- **Vanilla JavaScript** -- ES modules, DOM manipulation, scroll event handling
- **Google Fonts** -- Poppins font family
- **Google Material Symbols** -- Icon library

No frameworks, build tools, or external dependencies required.

---

## Getting Started

### Prerequisites
A local development server is required because the project uses ES modules (`import`/`export`). Opening HTML files directly via `file://` will not work due to CORS restrictions.

### Run Locally

**Option 1: VS Code Live Server** (recommended)
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Open the project folder in VS Code
3. Right-click `index.html` and select **Open with Live Server**

**Option 2: Python**
```bash
cd Streamixx
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option 3: Node.js**
```bash
cd Streamixx
npx serve .
```

---

## Architecture

### Shared Movie Data
All movie data is centralized in `scripts/movies-data.js` as a single ES module. Page-specific scripts import only what they need:

```js
// Example: random-pick.js
import { allMovies } from './movies-data.js';
```

This eliminates data duplication and ensures consistency across all pages.

### Shared Styles
Common styles (base reset, navbar, responsive breakpoints) live in `styles/common.css`. Each page links both `common.css` and its own page-specific stylesheet, keeping styles DRY while allowing per-page customization.

---

## Authors

- **Harshit Singla** -- [LinkedIn](https://www.linkedin.com/in/harshit-singla-05b782244/) | [Instagram](https://www.instagram.com/harshit_singla1761/)
- **Harshpreet Singh** -- [LinkedIn](https://www.linkedin.com/in/harshpreetsingh931/) | [Instagram](https://www.instagram.com/harshpreet0402/)
