import { getCompanyProfile } from 'api';
import { CompanyProfile } from 'Types/company';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from './SideBar';
import Spinner from 'Components/Spinner/Spinner';
import DefaultHeader from './DefaultHeader';
import './CompanyPage.css';

function CompanyPage() {
  const { symbol } = useParams<{ symbol: string }>();
  const [companyProfile, setcompanyProfile] = useState<CompanyProfile[]>();
  const [apiRequestError, setApiRequestError] = useState<string>('');
  useEffect(() => {
    const fetchCompanyProfile = async () => {
      const response = symbol ? await getCompanyProfile(symbol) : null;
      if (typeof response === 'string') {
        setApiRequestError(response);
      }
      else{
        setcompanyProfile(response?.data);
      }

    }
    fetchCompanyProfile();
  }, []);

  return (
    <div className="company-page-container" style={{display: 'flex'}}>
      {companyProfile ? (
        <>
          <SideBar />
          <div className="company-page-content">
            <DefaultHeader data={companyProfile[0]} />
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