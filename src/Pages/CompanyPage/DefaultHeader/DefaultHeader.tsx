import { CompanyProfile } from 'Types/company'
import React from 'react'
import './DefaultHeader.css'

type Props = {
    data : CompanyProfile
}

const DefaultHeader = ({data}: Props) => {
  return (
    <div className="default-header">
      <div className="data-block">
        <div className="label">Company Name</div>
        <div className="value">{data.companyName}</div>
      </div>
      <div className="data-block">
        <div className="label">Price</div>
        <div className="value">${data.price?.toFixed(2) || 'N/A'}</div>
      </div>
      <div className="data-block">
        <div className="label">Market Cap</div>
        <div className="value">${data.mktCap?.toLocaleString() || 'N/A'}</div>
      </div>
      <div className="data-block">
        <div className="label">Sector</div>
        <div className="value">{data.sector || 'N/A'}</div>
      </div>
    </div>
  )
}

export default DefaultHeader