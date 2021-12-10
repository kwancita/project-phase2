import React from 'react';
import {Link} from 'react-router-dom'

function Header({cartItem}){
    return(
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Solora
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/review">Review</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            🛒
                            <span className="cart-length">
                                {cartItem.length === 0? "" : cartItem.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header