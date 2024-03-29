import React from 'react'
import Filter from './Filter'

const Product = ({items, handleAdd, setSearch, setSelectedCategory}) => {

    function handleSearch(event){
        setSearch(event.target.value);
    }
    
    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <div>
            
            <Filter setSearch={setSearch} onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
            
            <div className="products">
            {items.map((item)=> (
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
            ))} 
            </div>
        </div>
    )
}

export default Product
