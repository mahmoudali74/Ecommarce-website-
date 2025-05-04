import React, { useEffect, useState } from 'react'
import './details.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { quantitynumm } from './../store/Action';
import { addToCart } from './../store/Action';
import { Link } from 'react-router-dom';


function ProdDetails() {
  const {id} = useParams();
  const [product , setProduct] = useState([])
  // const [quantity , setQuantity] = useState(0)
  let disabled = false

  let quantitynum = useSelector((state) => state.quantitynum)
  const cart = useSelector((state) => state.cart);
  const mydispatcher = useDispatch();
  // let alert = false

  const togglequantity = () => {
    if (cart.some((item) => item.id === product.id)) {
      // Remove the item from the cart
      const updatedCart = cart.filter((item) => item.id !== product.id);
      mydispatcher(addToCart(updatedCart));
    } else {
      // Add the item to the cart
      const cartData = { ...product, quantity: quantitynum };
      mydispatcher(addToCart(cartData));
    }
  };
    
  console.log(cart); 


  
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(resp=>{
      console.log(resp.data);
      setProduct(resp.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[id])

  const decrement = ()=>{
    if(quantitynum === 0){
      disabled=true
    }else{
      // setQuantity(quantity-1)
      mydispatcher(quantitynumm(quantitynum-1))
    }
    
  }

  const increment = ()=>{
    // setQuantity(quantity+1)
    mydispatcher(quantitynumm(quantitynum+1))
  }


  console.log(quantitynum);
  // console.log(alert);


  return (
 <body >
    <div className='details' style={{backgroundColor:'#6a11cb'}}>
      <Container>
        <Row className='detailscontent'>
          <Col sm={5}>
            <img src={product.image} alt='headphones'/>
          </Col>
          <Col sm={7} className='about-prod'>
            <h1 className='title'>{product.title}</h1>
            <h3 className='category'>{product.category}</h3>
            <h5 className='price'>{product.price}$</h5>
            {/* <h5 className='price'>quantity : {product.rating.count}</h5> */}
            <p className='description'>
            {product.description}
            </p>
            <h4><button className='count' onClick={decrement} disabled={disabled}>-</button> {quantitynum} <button onClick={increment} className='count'>+</button></h4>
              
            <button className='addtocart' onClick={togglequantity}>
              {cart.some((item) => item.id === product.id) ? 'added' : 'Add to Cart'}
              
            </button>
            <Link to={'/cart'} className='icon link'><i className="fa-solid fa-cart-shopping" style={{color:'blue' , fontSize:'30px'}}></i></Link>
            
          </Col>
        </Row> 
    
      </Container>
      
    </div>
    
    
    </body>    
  )
}

export default ProdDetails
