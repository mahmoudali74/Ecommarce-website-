import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css'

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <body  style={{backgroundColor:'#6a11cb',marginTop:"-50px"}}>
    <div className="container mt-5  " style={{backgroundColor:'#6a11cb'}} >
           <div className="row">
      {products.map((product) => (
        <div className="col-sm-4 " key={product.id} >
          <div className="card mb-4 cards">
            <img style={{width:'140px', margin:'40px auto'}}
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="titlee">{product.title}</h5>
              <h5 className="category">category : {product.category}</h5>
              <h5 className="rating">rating : {product.rating.rate}</h5>
              <h5 className="quantity">quantity : {product.rating.count}</h5>
              <p className="price">{product.price}$</p>
              <Link className='view' to={`/productdetails/${product.id}`}>view</Link>
            </div>
          </div>
        </div>
      ))}
      </div>
 
    </div>
    </body>
  );
}

export default Product;
