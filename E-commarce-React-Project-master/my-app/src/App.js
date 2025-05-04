import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ProdDetails from './components/product_details/ProdDetails';
import Home from './components/Home/home';
import About from './components/About/About';
import Product from './components/products/Products';
import BasicExample from './components/payment/Payment';
import GroupExample from './components/payment/Order';
import Contact from './components/contact/Contact';
import Login from './components/Login/login';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/productdetails/:id' element={<ProdDetails/>}/>
        <Route path='/payment' element={<BasicExample/>}/>
        <Route path='/cart' element={<GroupExample/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
