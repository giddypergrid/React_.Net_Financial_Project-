import React from 'react'
import { Link } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';

type Props = {
    symbol: string;
    removePortfolio: (e: any) => void;
}

const Portfolio = ({symbol, removePortfolio}: Props): JSX.Element => {
  return (
    <div className='portfolio-card'>
      <Link to={`/company/${symbol}`}>
        <h2>{symbol}</h2>
        <div>
          <form onSubmit={(e) => removePortfolio(e)}>
            <input readOnly={true} hidden={true} value={symbol}/>
            <button type='submit'>Remove</button>
          </form>
        </div>
      </Link>
    </div>
  )
}

export default Portfolio