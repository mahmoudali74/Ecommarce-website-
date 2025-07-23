import React, { useEffect, useState } from 'react';
import './details.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { quantitynumm, addToCart } from './../store/Action';

function ProdDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const quantitynum = useSelector((state) => state.quantitynum);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(resp => setProduct(resp.data))
      .catch(err => console.error(err));
  }, [id]);

  const decrement = () => {
    if (quantitynum > 0) dispatch(quantitynumm(quantitynum - 1));
  };

  const increment = () => {
    dispatch(quantitynumm(quantitynum + 1));
  };

  const togglequantity = () => {
    if (cart.some((item) => item.id === product.id)) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      dispatch(addToCart(updatedCart));
    } else {
      const cartData = { ...product, quantity: quantitynum };
      dispatch(addToCart(cartData));
    }
  };

  return (
    <div className='details-page'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <div className='product-card'>
              <Row>
                <Col md={5}>
                  <img src={product.image} alt='product' className='product-image' />
                </Col>
                <Col md={7} className='product-info'>
                  <h2 className='product-title'>{product.title}</h2>
                  <h5 className='product-category'>{product.category}</h5>
                  <h4 className='product-price'>{product.price}$</h4>
                  <p className='product-description'>{product.description}</p>

                  <div className='quantity-controls'>
                    <button onClick={decrement} disabled={quantitynum === 0}>-</button>
                    <span>{quantitynum}</span>
                    <button onClick={increment}>+</button>
                  </div>

                  <button className='add-button' onClick={togglequantity}>
                    {cart.some((item) => item.id === product.id) ? '✓ Added' : 'Add to Cart'}
                  </button>

                
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProdDetails;
