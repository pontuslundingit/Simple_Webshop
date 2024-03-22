




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
            card.classList.add('col-md-4', 'mb-5', 'd-flex', 'align-items-stretch');
            card.innerHTML = `
            <div class="card">
                    <img class="clickable card-img-top img-fluid" style="height: 200px; object-fit: contain;" src="${productImage}" alt="${productTitle}" onclick="showProductDetails(${productId})">
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title clickable" onclick="showProductDetails(${productId})">${productTitle}</h4>
                        <p class="card-text text-truncate">${productDescription}</p>
                        <div class="mt-auto">
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>
            `;
            
            const productsSection = document.querySelector('.products .row');
            productsSection.appendChild(card);
        });
    } catch (error) {
        console.log('Error fetching product data:', error);
    }
}

function showProductDetails(productId) {
    window.location.href = `productsFocus.html?id=${productId}`;
}




fetchProductData();


window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(product => {
            document.getElementById('productTitle').textContent = product.title;
            document.getElementById('productImage').src = product.image;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('addToCartButton').addEventListener('click', function() {
                // kod för addToCart här, redigera parametern sedan
            });
        })
        .catch(error => {
            console.log('Error fetching product data:', error);
        });
};
