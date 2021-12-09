import React from 'react'

const Product = ({items, handleAdd}) => {
    return (
        <div className="products">
           {items.map((item)=> (
               <div className ="card">
                   <div >
                       <img 
                        className="product-image"
                        src={item.image_link}
                        alt={item.name}
                       />
                   </div>
                   <div >
                       <h4 className="product-name">{item.name}</h4>
                   </div>
                   <div className="product-price">${item.price}</div>
                   <div>
                       <button 
                          className="product-add" 
                          onClick={()=>handleAdd(item)} >Add to card</button>
                   </div>
               </div>
           ))} 
        </div>
    )
}

export default Product
