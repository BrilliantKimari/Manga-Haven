fetch ('http://localhost:3000/Manga')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const mangaList = document.getElementById('manga-list');
    data.forEach(manga => {        const mangaItem = document.createElement('div');
        mangaItem.className = 'manga-item';
        mangaItem.innerHTML = `
            <h2>${manga.title}</h2>
            <p>${manga.description}</p>
            <img src="${manga.image}" alt="${manga.title}" />
            <p>Author: ${manga.author}</p>
            <p>Genre: ${manga.genre}</p>
            <p>Rating: ${manga.rating}</p>
            <p>Published: ${manga.published}</p>
        `;
        mangaList.appendChild(mangaItem);
    });
})



