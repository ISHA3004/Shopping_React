import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import items from './Components/Data'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const productItems = items;
  const [cartItems,setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const prodExist = cartItems.find((item) => item.id === product.id);
    if(prodExist)
    {
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...prodExist,quantity:prodExist.quantity+1} : item));
    }
    else
    {
      setCartItems([...cartItems,{...product,quantity:1}]);
    }
  }

  const handleRemoveProduct = (product) => {
    if(product.quantity === 1)
    {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...item,quantity:0}: item));
      const newCartItems = [...cartItems];
      newCartItems.splice(cartItems.findIndex(item => item.id === product.id) , 1);
      setCartItems(newCartItems);
    }
    else{
      setCartItems(cartItems.map((item) => item.id === product.id ? {...product,quantity:product.quantity-1} : item));
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Navbar  cartItems={cartItems}/>}>
              <Route index element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} />
              <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} />
              <Route exact path="/contact" element={<Contact />} />
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <div>Hello world</div> */}
    </>
    
  );
}

export default App;
