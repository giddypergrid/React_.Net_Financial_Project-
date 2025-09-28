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
    <div className='peers-symbol-section'>
        {peers && peers?.map((peer) => 
        currentPage&&<Link to={`/company/${peer}/${currentPage}`} type='button' key={peer} className='peer-symbol-button'>
            {peer}
        </Link>)}
    </div>
  )
}

export default PeersSection