import React from 'react'
import {PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-10'>

        <div className='text-center'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900'>Choose Your Plan</h2>
            <p className='mt-4 text-base sm:text-lg text-gray-600'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
        </div>

        <div className='mt-14 max-sm:mx-8'>
            <PricingTable/>
        </div>
      
    </div>
  )
}

export default Plan
