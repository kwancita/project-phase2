import React from 'react'

const Detail = () => {
    return (
        <div>
            <div className="products">
            
                <div className ="card" key={item.id}>
                    <div >
                        <img 
                            className="product-image"
                            src={item.image_link}
                            alt={item.name}
                        />
                    </div>
                    <div >
                        <h4 className="product-name">
                            {item.name}       <button className="btn">See more</button>
                        </h4>
                        
                    </div>
                    <div className="product-price">${item.price} </div>
                    <div>
                        <button 
                            className="product-add" 
                            onClick={()=>handleAdd(item)} >Add to card
                        </button>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default Detail
