'use client'
import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from './components/carousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import PortfolioSection from './components/portfolioSection'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const page = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <main>
    <div className="bg-secondary glass flex justify-center relative z-50">
      <div className='grow max-w-screen-lg'>
      <Navbar></Navbar>
      </div>
    </div>
    <Carousel slides={SLIDES} options={OPTIONS} setCurrentSlide={setCurrentSlide}/>
    <div className='flex justify-center'>
    <div className='grow max-w-screen-lg'>
    <PortfolioSection currentSlide={currentSlide}/>
    </div>
    </div>

  </main>
  )
}

export default page