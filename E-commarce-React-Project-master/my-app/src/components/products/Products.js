import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setCategories(['All', ...new Set(data.map(item => item.category))]);
      });
  }, []);

  const filtered = products.filter((product) => {
    return (
      (category === 'All' || product.category === category) &&
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="shop-page">
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="🔍 Search product..."
              className="form-control search-box"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4">
          {filtered.map((product) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
              <div className="product-card shadow-sm">
                <img src={product.image} alt={product.title} className="product-img" />
                <div className="product-details">
                  <h6 className="product-title">{product.title}</h6>
                  <p className="product-category">{product.category}</p>
                  <div className="rating">
                    ⭐ {product.rating.rate} ({product.rating.count})
                  </div>
                  <div className="price">${product.price}</div>
                  <Link to={`/product/${product.id}`}  className="btn btn-sm view-btn">View</Link>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-white mt-4">
              😔 No matching products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
