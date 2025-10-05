import { getTenKData } from 'Api/api';
import check_response from 'Api/apiProcess';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './TenKSection.css';
import { CompanyTenK } from 'Types/company';

type Props = {
    symbol: string;
}

const TenKSection = ({symbol}: Props) => {
    const [tenKData, setTenKData] = useState<CompanyTenK[]>();
    useEffect(() => {
        const fetchTenKData = async () => {
            const response = await getTenKData(symbol, 0, 5);
            const isValid = check_response(response, symbol);
            setTenKData(isValid?response?.data:undefined);
        }
        fetchTenKData();
    }, [symbol]);
  return (
    <div className='tenk-section-container'>
        <h2 style={{margin: '0 0 0 0', paddingLeft: '10px'}}>SEC FILINGS(8-K)</h2>
        <div className='tenk-link-button-container'>
        {
            tenKData && tenKData.map((tenK) => {
            const dateData = new Date(tenK.filingDate);
            const formattedDate = dateData.toISOString().split('T')[0];
            return (
                <Link className='tenk-link-button' to={tenK.finalLink} key={tenK.finalLink} type='button' target='_blank' rel='noopener noreferrer'>
                {formattedDate}
                </Link>
            );
            })
        }
        </div>
    </div>
  )
}

export default TenKSection