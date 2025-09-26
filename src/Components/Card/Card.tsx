import React from 'react'
import './Card.css'
import { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'
import { CompanySearch2 } from 'Types/company'

interface Props {
    id: string;
    data: CompanySearch2;
    addPortfolio: (e: any) => void;
}

const Card: React.FC<Props> = ({id, data, addPortfolio}: Props): JSX.Element => {
  return (
    <div className='stock-card'>
        <Link to={`/company/${data.symbol}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={'https://picsum.dev/image/16/view'} alt={`${data.symbol} company image`} />
          <div className='stock-info'>
              <span className='date'>{data.date}</span>
              <span className='ticker-symbol'>{data.symbol}</span>
              <h2 className='stock-price'>${data.price}</h2>
              <h2 className='stock-volume'>{data.volume}</h2>
          </div>
          <p className='stock-description'>
            Stock information and market data for {data.symbol} ({data.symbol})
          </p>
        </Link>
        <form onSubmit={(e) => addPortfolio(e)}>
          <input readOnly={true} hidden={true} value={data.symbol}/>
          <button type='submit'>Add to Portfolio</button>
        </form>
    </div>
  )
}

export default Card