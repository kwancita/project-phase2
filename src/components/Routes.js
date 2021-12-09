import React from 'react'
import Product from './Product'
import Signup from './Signup'
import Cart from './Cart'
import {Route, Switch} from 'react-router-dom'

function Routes({items,cartItem, handleAdd, handleRemove,handleClearCart}){
    return(
        <div>
            <Switch>
                <Route path="/" exact >
                    <Product items={items} handleAdd={handleAdd} />
                </Route>
                <Route path="/signup" exact >
                    <Signup />
                </Route>
                <Route path="/cart" exact >
                    <Cart 
                        cartItem={cartItem} 
                        handleAdd={handleAdd} 
                        handleRemove={handleRemove} 
                        handleClearCart={handleClearCart}
                    />
                </Route>
            </Switch> 
            
        </div>
    )
}

export default Routes;