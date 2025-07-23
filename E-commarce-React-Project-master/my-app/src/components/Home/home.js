// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const featuredProducts = products.slice(0, 6);
  const offers = products.slice(6, 10);

  return (
    <div style={{ background: "linear-gradient(to bottom right, #121212, #1f1f1f)", color: "white", fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <header className="text-center py-5 hero-header bg-dark border-bottom border-warning">
        <div className="container">
          <h1 className="display-4 fw-bold text-light">
            Welcome to <span className="text-warning">S-Store</span>
          </h1>
          <p className="lead text-secondary">Shop the latest trends in fashion, electronics, and more.</p>
          <Link to="/products" className="btn btn-warning btn-lg px-4 rounded-pill shadow">
            Shop Now
          </Link>
        </div>
      </header>

      {/* Carousel */}
      <div className="container mt-4">
        <div id="cardSlider" className="carousel slide rounded shadow overflow-hidden" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[1, 2, 3].map((i, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={i}>
                <div className="card slider-card bg-dark text-white border-warning border-2">
                  <img
                    src={`../photos/pexels-${index === 0 ? 'sameer-kalani-3802602' : index === 1 ? 'pixabay-258244' : 'muffin-creatives-1616096'}.jpg`}
                    className="card-img-top slider-img"
                    alt={`Image ${i}`}
                    style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning">
                      {index === 0
                        ? 'Canon EOS Rebel T7 DSLR'
                        : index === 1
                          ? 'Pacifica Beauty'
                          : 'Kendra Scott Letters'}
                    </h5>
                    <p className="card-text">
                      {index === 0
                        ? 'Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image'
                        : index === 1
                          ? 'Island Vanilla Hair Perfume & Body Spray'
                          : 'A-Z Pendant Necklace for Women, Fashion Jewelry'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#cardSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#cardSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fancy-title text-warning fw-bold display-6">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card product-card h-100 text-white shadow-lg border border-warning border-2 bg-dark">
                <img
                  src={product.image}
                  className="card-img-top p-3 img-fluid bg-white rounded"
                  alt={product.title}
                  style={{ height: '240px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-warning">{product.title}</h5>
                  <p className="card-text text-muted">Category: {product.category}</p>
                  <p className="card-text text-muted">Stock: {product.rating.count}</p>
                  <p className="card-text text-white fw-bold">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-warning w-100 rounded-pill mt-auto">
                    View Details
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offers Section */}
        <h2 className="text-center mb-4 mt-5 text-warning fw-bold display-6">🔥 Special Offers</h2>
        <div className="row">
          {offers.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card bg-gradient text-white h-100 border border-warning border-2 shadow-lg bg-dark">
                <img
                  src={product.image}
                  className="card-img-top p-2 img-fluid bg-white rounded"
                  alt={product.title}
                  style={{ height: '220px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title fw-semibold text-warning">{product.title}</h6>
                  <p className="card-text text-white fw-bold">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-warning btn-sm rounded-pill mt-2">
                    Grab Offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
