import React from 'react'
import PortfolioCard from './PortfolioCard';

type Props = {
    symbolList: string[];
    removePortfolio: (e: any) => void;
}

const PortfolioList = ({symbolList, removePortfolio}: Props) => {
  return (
    <div className='portfolio'>
        <h2>Portfolio</h2>
        <div className='portfolio-card-list'>
            <ul>
                {symbolList.map((symbol) => (
                    <li key={symbol}>
                        <PortfolioCard symbol={symbol} removePortfolio={removePortfolio} />
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default PortfolioList