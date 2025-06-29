# Manga Haven

A modern, responsive Single Page Application (SPA) for manga discovery, built with HTML, CSS, and JavaScript. Manga Haven allows users to browse, search, and review a large collection of manga, with all data served from a local JSON server.

## Features

- **Browse Manga:** View a collection of 50+ manga titles, each with cover, description, author, genre, rating, and publication date.
- **Search:** Instantly filter manga by title using the search bar.
- **Reviews:** Add and view reviews for each manga. Reviews are stored in your browser (localStorage) for persistence.
- **Responsive Design:** Fully responsive layout for desktop and mobile.
- **Interactive UI:** Smooth hover effects, modern navigation, and clear sectioning for a great user experience.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (ES6+)
- [json-server](https://github.com/typicode/json-server) for local API

## How It Works

1. **Frontend:**
   - All content is rendered on a single HTML page (`index.html`).
   - The manga list is dynamically generated from API data using JavaScript (`src/index.js`).
   - Users can search manga, add reviews, and interact with the UI without any page reloads.
2. **Backend:**
   - Data is served from a local `db.json` file using `json-server`.
   - Each manga object has unique attributes: `id`, `title`, `chapter`, `image`, `description`, `author`, `genre`, `rating`, and `published`.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Manga-Haven
   ```
2. **Install json-server (if not already):**
   ```bash
   npm install -g json-server
   ```
3. **Start the server:**
   ```bash
   json-server --watch db.json
   ```
4. **Open `index.html` in your browser.**

## Project Structure

```
Manga-Haven/
├── css/
│   └── styles.css
├── src/
│   └── index.js
├── db.json
├── index.html
└── README.md
```

## Event Listeners & Interactivity

- **Click:** Submit a review for a manga.
- **Input:** Live search/filter manga by title.
- **Mouseover/Mouseout:** Highlight manga cards on hover.

## User Stories

- As a user, I want to browse a large collection of manga so I can discover new titles.
- As a user, I want to search for manga by title so I can quickly find what I’m looking for.
- As a user, I want to add and view reviews for each manga so I can share my thoughts and read others’ opinions.

## Credits

- Manga cover images and descriptions are for demo purposes only.
- Built by [Your Name].

---

Enjoy exploring Manga Haven!
