const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

let productsData = [];

// Fetch products from Fake Store API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("Products fetched:", data); // تحقق من الداتا في الكونسول
    productsData = data;
    displayProducts(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = `<p class="text-danger text-center">Failed to load products.</p>`;
  }
}

// Display products
function displayProducts(products) {
  productList.innerHTML = "";
  if (products.length === 0) {
    productList.innerHTML = `<p class="text-center">No products found.</p>`;
    return;
  }
  products.forEach(product => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text text-truncate">${product.description}</p>
            <p class="fw-bold">$${product.price}</p>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += card;
  });
}

// Search functionality
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

// Initialize
fetchProducts();
