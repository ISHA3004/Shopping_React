import React from 'react'
import './Navbar.css'
import { Link,Outlet } from 'react-router-dom'

const Navbar = ({cartItems}) => {
  return (
    <>
    <nav className="navbar">
      <ul className="navitems">
        <li className="navlinks">
          <Link className="link" to="/" >Home</Link>
        </li>
        <li className="navlinks">
          <Link className="link" to="/cart">Cart</Link>
        </li>
        <li className="navlinks">
          <Link className="link" to="/contact">Contact</Link>
        </li>
        <li className="navlinks">
          <a className="link">Cart items: {cartItems.reduce((nitem,item) => nitem+item.quantity,0)}</a>
        </li>
      </ul>
      
    </nav>
    <Outlet />
    {/* <div>Hello world</div> */}
    </>
  )
}

export default Navbar
