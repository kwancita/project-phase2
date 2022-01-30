import React from 'react'

const Cart = ({cartItem, handleAdd, handleRemove,handleClearCart}) => {
    const totalPrice = cartItem.reduce(
        (price, item) => price+ item.quantity * item.price, 0
    )
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Your Cart</h2>
            <div className="clear-cart">
                {cartItem.length >=1 &&(
                    <button className="clear-cart-button" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                )}   
            </div>
            {cartItem.length === 0 && (
                <div className="cart-items-empty">Cart is empty.</div>
            )}

            <div>{cartItem.map((item)=>(
                <div key={item.id} className="cart-items-list">
                    <img 
                        className="cart-items-image"
                        src={item.image_link}
                        alt={item.name}
                    />
                    <div className="cart-items-name" >{item.name}</div>
                    <div className="cart=items-function">
                        <button 
                            className="cart-items-remove"
                            onClick={()=> handleRemove(item)} 
                        >-</button>
                        <button
                            className="cart-items-add"
                            onClick={()=> handleAdd(item)}   
                        >+</button>
                    </div>
                    <div className="cart-items-price">
                        {item.quantity} * ${item.price}
                    </div>
                </div>
                ))}
            </div>
            <div className="cart-items-total-price-name">
                Total
                <div className="cart-items-total-price">${totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart
