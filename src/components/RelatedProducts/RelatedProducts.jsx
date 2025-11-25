import React from 'react'
import './RelatedProducts.css'
import data_product from '../Asset/data'
import Item from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{return <Item key={i} {...item} />})}
        </div>

    </div>
  )
}
