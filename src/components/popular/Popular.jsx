import React from 'react'
import './Popular.css'
import data_product from '../Asset/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
    <h1>POPULAR IN WOMEN</h1>
    <hr/>
    <div className="popular-item">
        {data_product.map((item,i)=> {
            return <Item key={i} {...item} />
        })}
    </div>
</div>

  )
}
export default Popular