'use client'
import React  from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

import Image from 'next/image'
import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.jpg'
import image3 from '../images/slide-3.jpg'
import image4 from '../images/slide-4.jpg'

const images = [image1, image2, image3, image4]



type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  setCurrentSlide: Function
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, setCurrentSlide } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  emblaApi?.on('select', () => {
    const selectedSnap = emblaApi?.selectedScrollSnap();
    setCurrentSlide(selectedSnap)
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index}</span>
              </div>
              <Image
                className="embla__slide__img"
                src={images[index]}
                alt="Your alt text"
                width={'2000'}
                height={'2000'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons ml-auto mr-auto w-1/2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default Carousel
