

async function fetchProductData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        data.forEach(product => {
            const productId = product.id;
            const productImage = product.image;
            const productTitle = product.title;
            const productDescription = product.description;

            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-5');
            card.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${productImage}" alt="${productTitle}">
                    <div class="card-body">
                        <h4 class="card-title">${productTitle}</h4>
                        <p class="card-text">${productDescription}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            `;
            
            const productsSection = document.querySelector('.products .row');
            productsSection.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

fetchProductData();