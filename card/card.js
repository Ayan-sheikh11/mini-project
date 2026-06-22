

const cardContainer = document.getElementById('card-container');



  fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(products => {
       products.forEach(p =>
              cardContainer.innerHTML +=

         `
        <article class="card">
          <div class="image-wrap">
            <img src="${p.image}" alt="${p.title || p.category}">
          </div>
          <div class="card-body">
            <h3 class="title">${p.category}</h3>
            <p class="desc">${p.description}</p>
            <div class="meta">
              <div class="price">$${Number(p.price).toFixed(2)}</div>
              <div class="rating">rating  ${p.rating && p.rating.rate ? p.rating.rate : 'N/A'}</div>
            </div>
            <div class="actions">
              <button class="btn btn-add">Add to Cart</button>
              <button class="btn btn-wish">Wishlist</button>
            </div>
          </div>
        </article>
      `);

    })
    .catch(err => console.error('Error fetching products:', err));




