import React from 'react'
import SingleProduct from './SingleProduct'

const Productspage = () => {
    const plants = [{
        thumbnail: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
        name: "plant 1", 
        price: 100
    }, {
        thumbnail: "https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=",
        name: "plant 2", 
        price: 100
    },
    {
        thumbnail: "https://static4.depositphotos.com/1026290/368/i/450/depositphotos_3682375-stock-photo-houseplant.jpg",
        name: "plant 3", 
        price: 100
    },
    {
        thumbnail: "https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg",
        name: "plant 4", 
        price: 100
    },
    {
        thumbnail: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
        name: "plant 5", 
        price: 100
    },
    {
        thumbnail: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
        name: "plant 6", 
        price: 100
    }]
  return (
    <div className='flex flex-wrap justify-evenly items-center gap-4 m-8'>
      {
        plants.map((plant)=>{
            return (
                <SingleProduct props={plant} key={plant.name}/>
            )
        })
      }
    </div>
  )
}

export default Productspage
