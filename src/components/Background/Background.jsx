import React from 'react'
import './Background.css'
import bg_img from '../../assets/bg-website-min2.png'

export default function Background() {
  return (
    <div className='bg'>
        <img src={bg_img} alt="" />
    </div>
  )
}
