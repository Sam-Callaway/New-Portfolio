'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from './components/carousel'
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const page = () => {
  return (
    <main>
    <div className="bg-secondary glass flex justify-center relative z-50">
      <div className='grow max-w-screen-lg'>
      <Navbar></Navbar>
      </div>
    </div>
   
    <Carousel slides={SLIDES} options={OPTIONS}/>

  </main>
  )
}

export default page