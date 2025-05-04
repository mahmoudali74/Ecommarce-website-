// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <body style={{backgroundColor:"#6a11cb"}}>
      {/* Hero Section */}
      <header className="text-center py-5" style={{ background: "#F5FFFA",marginTop:"-20px" }}>
        <div className="container">
          <h1>Welcome to S-Store</h1>
          <p>Shop the latest trends in fashion, electronics, and more.</p>
          <a href="/products" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header>

      <div class="container mt-4">
        <div id="cardSlider" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card">
                <img src='../photos/pexels-sameer-kalani-3802602.jpg' class="card-img-top" alt="Image 1" style={{ width:"300px" }} />
                <div class="card-body">
                  <h5 class="card-title">Canon EOS Rebel T7 DSLR </h5>
                  <p class="card-text">Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src="../photos/pexels-pixabay-258244.jpg" class="card-img-top" alt="Image 2" style={{ height: '480px' }} />
                <div class="card-body">
                  <h5 class="card-title">Pacifica Beauty </h5>
                  <p class="card-text">Island Vanilla Hair Perfume & Body Spray</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src="../photos/pexels-muffin-creatives-1616096.jpg" class="card-img-top" alt="Image 3" style={{ height: '480px' }} />
                <div class="card-body">
                  <h5 class="card-title">Kendra Scott Letters</h5>
                  <p class="card-text"> A-Z Pendant Necklace for Women, Fashion Jewelry</p>
                </div>
              </div>
            </div>

          </div>


          <a class="carousel-control-prev" href="#cardSlider" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#cardSlider" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4 " style={{ color: 'white' }}>Featured Products</h2>

        <div className="container mt-5">
           <div className="row">
      {products.map((product) => (
        <div className="col-sm-4 " key={product.id} >
          <div className="card mb-4 cards">
            <img style={{width:'140px', margin:'20px auto'}}
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="titlee">{product.title}</h5>
              <h5 className="category">category : {product.category}</h5>
              <h5 className="quantity">quantity : {product.rating.count}</h5>
             
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
        <hr />
      

      </div>
      </body>
    </>
  );
}

export default ProductList;
