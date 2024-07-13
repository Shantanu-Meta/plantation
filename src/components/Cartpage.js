import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from './SingleProduct'

const Cartpage = () => {
  const plants = useSelector(store=>store.cart)
  return (
    <div className='flex flex-wrap justify-evenly items-center gap-2 m-8'>
      {
        plants.length > 0 ? plants.map((plant)=>{
          return <SingleProduct props={plant} key={plant.name}/>
        }) : <h1 className='text-[3rem]'>No items added</h1>
      }
    </div>
  )
}

export default Cartpage
