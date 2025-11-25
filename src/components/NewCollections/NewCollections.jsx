import React from 'react'
import './NewCollections.css'
import new_collections from '../Asset/new_collections'
import Item from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item,i)=>{return <Item key={i} {...item} />})}

        </div>

    </div>
  )
}
export default NewCollections