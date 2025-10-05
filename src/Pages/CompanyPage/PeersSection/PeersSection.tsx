import React, { useEffect, useState } from 'react'
import { getCompanyPeers } from 'Api/api'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './PeersSection.css'
import check_response from 'Api/apiProcess'
type Props = {
    symbol: string;
}
const PeersSection = ({symbol}: Props) => {
  const [peers, setPeers] = useState<string[]>();
  const pathParts = useLocation().pathname.split('/');
  const currentPage = pathParts[pathParts.length - 1];
  useEffect(() => {
    const fetchPeers = async () => {
      if (!symbol) return;
      const response = await getCompanyPeers(symbol);
      const isValid = check_response(response, symbol);
      isValid&&setPeers(response?.data.slice(0, 10).map((peer) => peer.symbol).sort(() => Math.random() - 0.5));
    }
    fetchPeers();
  }, [symbol]);

  return (
    <div className='peers-section-container'>
      <h2 style={{margin: '0 0 0 0', paddingLeft: '10px'}}>PEER SYMBOLS</h2>
      <div className='peers-symbol-section'>
          {peers && peers?.map((peer) => 
          currentPage&&<Link to={`/company/${peer}/${currentPage}`} type='button' key={peer} className='peer-symbol-button'>
              {peer}
          </Link>)}
      </div>
    </div>

  )
}

export default PeersSection