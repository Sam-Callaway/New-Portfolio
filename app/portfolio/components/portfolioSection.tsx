import React from 'react'
import WorldleScorerPortfolio from './WorldleScorerPortfolio'
import UXDesignPortfolio from './UXDesignPortfolio'
import MatchReporterPortfolio from './MatchReporterPortfolio'


type PropType = {
    currentSlide: number
  }

const PortfolioSection: React.FC<PropType> = (props) => {
    const {currentSlide} = props
    let currentPortfolio;
    switch(currentSlide){
        case 0:
            currentPortfolio = <WorldleScorerPortfolio/>
        case 1:
            currentPortfolio = <UXDesignPortfolio/>
        case 2:
            currentPortfolio = <MatchReporterPortfolio/>
    }

    return (
    <div>{currentPortfolio}</div>
    )
}

export default PortfolioSection