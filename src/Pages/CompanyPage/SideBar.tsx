import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SideBar.css'

type Props = {}

const SideBar = (props: Props) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="sidebar">
        <Link 
          to="company-detail" 
          className={`sidebar-link ${isActive('company-detail') ? 'active' : ''}`}
        >
          Company Profile
        </Link>
        <Link 
          to="income-statement" 
          className={`sidebar-link ${isActive('income-statement') ? 'active' : ''}`}
        >
          Income Statement
        </Link>
        <Link 
          to="company-ttm" 
          className={`sidebar-link ${isActive('company-ttm') ? 'active' : ''}`}
        >
          Company TTM
        </Link>
        <Link 
          to="company-balance-sheet" 
          className={`sidebar-link ${isActive('company-balance-sheet') ? 'active' : ''}`}
        >
          Company Balance Sheet
        </Link>
        <Link 
          to="company-cash-flow" 
          className={`sidebar-link ${isActive('company-cash-flow') ? 'active' : ''}`}
        >
          Company Cash Flow
        </Link>
    </div>
  )
}

export default SideBar

