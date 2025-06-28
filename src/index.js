//url that fetches manga data from the server and displays it on the page
fetch('http://localhost:3000/Manga')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const mangaList = document.getElementById('manga-list');
    data.forEach((manga, idx) => {
      const mangaItem = document.createElement('div');
      mangaItem.className = 'manga-item';
      const reviewListId = `review-list-${idx}`;
      const reviewTextId = `review-text-${idx}`;
      mangaItem.innerHTML = `
        <h2>${manga.title}</h2>
        <p>${manga.description}</p>
        <img src="${manga.image}" alt="${manga.title}" />
        <p>Author: ${manga.author}</p>
        <p>Genre: ${manga.genre}</p>
        <p>Rating: ${manga.rating}</p>
        <p>Published: ${manga.published}</p>
        <ul id="${reviewListId}"></ul>
        <textarea id="${reviewTextId}" placeholder="Write your review here..."></textarea>
        <button class="submit-review" data-list="${reviewListId}" data-text="${reviewTextId}" data-mangaid="${manga.id}">Submit Review</button>
      `;
      mangaList.appendChild(mangaItem);
      // Load reviews from localStorage
      const reviews = JSON.parse(localStorage.getItem(`reviews-${manga.id}`) || '[]');
      const reviewList = document.getElementById(reviewListId);
      reviews.forEach(review => {
        const reviewItem = document.createElement('li');
        reviewItem.textContent = review;
        reviewList.appendChild(reviewItem);
      });
    });
    // Add event listeners for all review buttons
    mangaList.querySelectorAll('.submit-review').forEach(btn => {
      btn.addEventListener('click', function() {
        const reviewText = document.getElementById(this.dataset.text).value;
        const reviewList = document.getElementById(this.dataset.list);
        const mangaId = this.dataset.mangaid;
        if (reviewText.trim() === '') {
          alert('Please enter a review.');
          return;
        }
        // Save review to localStorage
        let reviews = JSON.parse(localStorage.getItem(`reviews-${mangaId}`) || '[]');
        reviews.push(reviewText);
        localStorage.setItem(`reviews-${mangaId}`, JSON.stringify(reviews));
        const reviewItem = document.createElement('li');
        reviewItem.textContent = reviewText;
        reviewList.appendChild(reviewItem);
        document.getElementById(this.dataset.text).value = '';
      });
    });
  })
  .catch(error => {
    console.error('Error fetching manga:', error);
  });

  







