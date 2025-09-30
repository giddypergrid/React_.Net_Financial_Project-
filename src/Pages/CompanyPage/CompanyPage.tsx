import { getCompanyProfile } from 'Api/api';
import { CompanyProfile } from 'Types/company';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from './SideBar';
import Spinner from 'Components/Spinner/Spinner';
import DefaultHeader from './DefaultHeader/DefaultHeader';
import './CompanyPage.css';
import PeersSection from './PeersSection/PeersSection';
import check_response from 'Api/apiProcess';
import TenKSection from './TenKSection/TenKSection';

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>();
  const [companyProfile, setcompanyProfile] = useState<CompanyProfile[]>();
  useEffect(() => {
    const fetchCompanyProfile = async () => {
      const response = symbol ? await getCompanyProfile(symbol) : null;
      const isValid = response ? check_response(response, symbol) : false;
      if (isValid && response && typeof response !== 'string') {
        setcompanyProfile(response?.data);
      }

    }
    fetchCompanyProfile();
  }, [symbol]);

  return (
    <div className="company-page-container" style={{display: 'flex'}}>
      {companyProfile ? (
        <>
          <SideBar />
          <div className="company-page-content">
            <DefaultHeader data={companyProfile[0]} />
            <div className='peers-and-tenk-section'>
              {symbol && <PeersSection symbol={symbol} />}
              {symbol && <TenKSection symbol={symbol} />}
            </div>

            <div className="outlet-content">
              <Outlet context={{ symbol }} />
            </div>
          </div>
        </>
      ) : <Spinner />}
    </div>
  )
}

export default CompanyPage