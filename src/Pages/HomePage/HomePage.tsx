import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import HeroImage from './HomePage.png'

function HomePage() {
  return (
    <div className='home-container'>
      <img className='home-hero' src={HeroImage} alt='Stocks dashboard hero' />
      <h1 className='home-title'>Welcome to MiStock</h1>
      <p className='home-subtitle'>Search tickers, view companies, and build your portfolio.</p>
      <Link to='/search' className='cta-button'>Get Started</Link>
    </div>
  )
}

export default HomePage