import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const CompanyRedirect: React.FC = () => {


  return <Navigate to="company-detail" />;
};

export default CompanyRedirect;
