import React, {useState, useEffect} from 'react'
import Header from'./components/Header'
import Routes from './components/Routes';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [cartItem, setCart] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/products")
    .then(res=>res.json())
    .then(setItems)
  //if
  },[])

  function handleAdd(product){
    const inCart = cartItem.find((item)=> item.id === product.id);
    if(inCart){
      setCart(
        cartItem.map((item)=>
          item.id === product.id?{...inCart, quantity: inCart.quantity+1}:item
        )
      )
    }else{
      setCart([...cartItem, {...product, quantity:1}])
    }
  }

  function handleRemove(product){
    const inCart = cartItem.find((item)=> item.id === product.id);
    if (inCart.quantity ===1){
      setCart(cartItem.filter((item)=>item.id !== product.id));
    }else{
      setCart(
        cartItem.map((item)=>item.id === product.id? 
        {...inCart, quantity:inCart.quantity-1}:item)
      )
    }
  }

  function handleClearCart(){
    setCart([])
  }

  return (
    <div>
      <Router>
        <Header cartItem={cartItem}/>
        <Routes 
          items={items} 
          cartItem={cartItem} 
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleClearCart={handleClearCart}
          />
      </Router>
    </div>
  );
}

export default App;
