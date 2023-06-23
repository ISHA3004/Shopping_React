import React from 'react'
import './Cart.css'

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
    <div className='cart-header'>Cart Items</div>
      {cartItems.length === 0 && (<div className='cart-empty'>Cart is Empty</div>)}
      <div className="cart-item heading">
              <div className="cart-item-info">Item</div>
              <div className="cart-item-info">Cost</div>
              <div className="cart-item-info">Quantity</div>
      </div> 
      <hr />
      <div>
        {cartItems.map((item) => {
          return(
            <div className="cart-item">
              <div className="cart-item-info">{item.itemname}</div>
              <div className="cart-item-info">{item.cost}</div>
              <div className="cart-item-info"><button className="addrembtn" onClick={() => handleAddProduct(item)}>+</button>{item.quantity}<button className="addrembtn" onClick={() => handleRemoveProduct(item)}>-</button></div>
            </div>  
          )
        })}
      </div>
      <div className='cart-price hr'>Total  price : {cartItems.reduce((tprice,item) => tprice+ item.quantity*item.cost,0)}</div>
      
    </div>
  )
}

export default Cart
