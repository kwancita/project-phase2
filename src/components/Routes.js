import React from "react";
import Product from "./Product";
import Review from "./Review";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";

//function here
function Routes({
  items,
  cartItem,
  handleAdd,
  handleRemove,
  handleClearCart,
  setSearch,
  setSelectedCategory,
}) {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Product
            items={items}
            handleAdd={handleAdd}
            setSearch={setSearch}
            setSelectedCategory={setSelectedCategory}
          />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItem={cartItem}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            handleClearCart={handleClearCart}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
