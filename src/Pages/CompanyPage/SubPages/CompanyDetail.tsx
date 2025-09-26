import React from 'react'
import { useOutletContext } from 'react-router-dom'

type Props = {}

type OutletContext = {
  Tire: React.ComponentType;
  companyData: any;
  symbol: string;
  error: string;
}

const CompanyDetail = (props: Props) => {
  const { Tire, companyData, symbol, error } = useOutletContext<OutletContext>();
  
  return (
    <div>
      <h2>Company Profile</h2>
    </div>
  )
}

export default CompanyDetail