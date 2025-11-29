import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
            <h2 className='bg-white rounded-full h-8 w-8 font-bold flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal mb-14 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias enim obcaecati voluptate tempora voluptatibus sint.</p>
                <div className="flex  ">
                <button className='bg-blue-600 text-white py-1 px-3 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white p-1 rounded-full '><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent