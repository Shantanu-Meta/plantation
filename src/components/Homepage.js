import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
      <div className="w-full h-screen relative">
          <img
            src="https://www.ugaoo.com/cdn/shop/articles/shutterstock_361899098-1.jpg?v=1715848589"
            alt=""
            className="w-full h-full bg-cover"
          />

          <div className="absolute top-[40%] left-[10%] text-[4rem] text-white">
            <h1>Plantation</h1>
            <p>A plant e-commerce website</p>
            <Link to="/products" className="text-[2rem] bg-white text-black p-4 rounded-md shadow-md hover:bg-green-400">
              Get Started
            </Link>
          </div>
        </div>
  )
}

export default Homepage
