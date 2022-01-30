import React, {useState, useEffect} from 'react'
import Header from'./components/Header'
import Routes from './components/Routes';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [cartItem, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")


  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(setItems)
  },[])

  function setAllCartVariables(value) {
    setCart(value)
    localStorage.setItem("cart", JSON.stringify(value))
  }

  function handleAdd(product){
    const inCart = cartItem.find((item)=> item.id === product.id);
    if(inCart){
      const newCartItem = cartItem.map((item)=>
      item.id === product.id?{...inCart, quantity: inCart.quantity+1}:item
    )
      setAllCartVariables(newCartItem)
      // setCart(newCartItem)
      // localStorage.setItem("cart", JSON.stringify(newCartItem))
    }else{
      const newCartItem2 = [...cartItem, {...product, quantity:1}]
      // setCart(newCartItem2)
      // localStorage.setItem("cart", JSON.stringify(newCartItem2))
      // console.log(localStorage.getItem("cart"))
      setAllCartVariables(newCartItem2)
    }

  }

  function handleRemove(product){
    const inCart = cartItem.find((item)=> item.id === product.id);
    if (inCart.quantity ===1){
      setAllCartVariables(cartItem.filter((item)=>item.id !== product.id));
    }else{
      setAllCartVariables(
        cartItem.map((item)=>item.id === product.id? 
        {...inCart, quantity:inCart.quantity-1}:item)
      )
    }
  }

  const display = items
    .filter((item) => {
      if ( selectedCategory === "All"){
        return true;
      }else{
        return item.product_type === selectedCategory;
      } 
    })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  function handleClearCart(){
    setAllCartVariables([])
  }

  return (
    <div>
      <Router>
        <Header cartItem={cartItem}/>
        <Routes 
          items={display} 
          cartItem={cartItem} 
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleClearCart={handleClearCart}
          setSearch={setSearch}
          setSelectedCategory={setSelectedCategory}
          />
      </Router>
    </div>
  );
}

export default App;
