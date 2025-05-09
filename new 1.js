<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>FashionVision - Branded Fashion Items</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

  /* Reset & base */
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f9f9f9;
    color: #333;
    line-height: 1.4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: #ff3e6c;
    color: white;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  button:hover,
  button:focus {
    background-color: #e6335a;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    flex-grow: 1;
  }

  /* Header */
  header {
    background: #222;
    color: white;
    padding: 1rem 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  nav a {
    font-weight: 600;
    padding: 0.4rem 0.7rem;
    border-radius: 3px;
    transition: background-color 0.3s ease;
  }
  nav a:hover,
  nav a:focus {
    background-color: #ff3e6c;
    color: white;
  }

  /* Hero */
  .hero {
    position: relative;
    background: linear-gradient(135deg, #ff3e6ccc, #ff7fa6cc), url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
    color: white;
    padding: 3rem 1rem 4rem;
    border-radius: 0 0 20px 20px;
    text-align: center;
  }
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
  .hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Product grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
    margin: 2rem 0 3rem 0;
  }
  .product-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 12px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  .product-card:hover,
  .product-card:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(255, 62, 108, 0.3);
  }
  .product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
  }
  .product-info {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-name {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .product-brand {
    font-size: 0.85rem;
    color: #999;
    margin-bottom: 0.6rem;
  }
  .product-price {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    color: #ff3e6c;
  }

  /* Footer */
  footer {
    background: #222;
    color: #bbb;
    text-align: center;
    padding: 1rem 1rem;
    font-size: 0.9rem;
  }

  /* Responsive and Mobile adjustments */
  @media (max-width: 600px) {
    .hero h1 {
      font-size: 1.8rem;
    }
    .hero p {
      font-size: 1rem;
    }
    .product-image {
      height: 140px;
    }
    header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.6rem;
    }
    nav {
      justify-content: flex-start;
      width: 100%;
      overflow-x: auto;
      padding-bottom: 0.5rem;
    }
  }
</style>
</head>
<body>
<header>
  <div class="logo" tabindex="0">FashionVision</div>
  <nav>
    <a href="#" tabindex="0">Home</a>
    <a href="#" tabindex="0">Men</a>
    <a href="#" tabindex="0">Women</a>
    <a href="#" tabindex="0">Accessories</a>
    <a href="#" tabindex="0">Sale</a>
  </nav>
</header>

<section class="hero" aria-label="FashionVision Hero Banner">
  <h1>Branded Fashion Items at Your Fingertips</h1>
  <p>Discover the latest trends and exclusive collections from top fashion brands.</p>
</section>

<main class="container" role="main">
  <section class="product-grid" aria-label="Product List">
    <!-- Product cards will be inserted by script -->
  </section>
</main>

<footer>
  &copy; 2024 FashionVision. All rights reserved. Made with ❤️ for stylish shoppers.
</footer>

<script>
  // Array of sample branded fashion items (id, brand, name, imageURL, price)
  const products = [
    {
      id: 1,
      brand: "Gucci",
      name: "Leather Tote Bag",
      image: "https://images.unsplash.com/photo-1562157878-1bb22a4247f4?auto=format&fit=crop&w=400&q=80",
      price: 1250
    },
    {
      id: 2,
      brand: "Prada",
      name: "Classic Sunglasses",
      image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=400&q=80",
      price: 370
    },
    {
      id: 3,
      brand: "Nike",
      name: "Air Max Sneakers",
      image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80",
      price: 150
    },
    {
      id: 4,
      brand: "Chanel",
      name: "Elegant Red Dress",
      image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a6b?auto=format&fit=crop&w=400&q=80",
      price: 1500
    },
    {
      id: 5,
      brand: "Levi's",
      name: "Slim Fit Jeans",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
      price: 85
    },
    {
      id: 6,
      brand: "Adidas",
      name: "Sports Cap",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      price: 35
    }
  ];

  const productGrid = document.querySelector('.product-grid');

  function formatPrice(price) {
    return '$' + price.toFixed(2);
  }

  // Create product cards
  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <img src="${p.image}" alt="${p.brand} - ${p.name}" class="product-image" />
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${formatPrice(p.price)}</div>
        <button aria-label="Order ${p.name} by ${p.brand}" type="button">Order</button>
      </div>
    `;
    // Add order button event listener
    card.querySelector('button').addEventListener('click', () => {
      alert(`Thank you for ordering the "${p.name}" by ${p.brand}!`);
    });
    productGrid.appendChild(card);
  });
</script>
</body>
</html>

