import React from 'react'
import Lefttext from './Lefttext'
import ImageContainer from './ImageContainer'

const Center = (props) => {
  return (
    <div className='py-8 flex gap-10 items-center h-[90vh] px-16'>
        <Lefttext/>
        <ImageContainer users = {props.users}/>
    </div>
  )
}

export default Center