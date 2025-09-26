import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getCompanyKeyMetrics } from 'api'
import { CompanyKeyMetrics } from 'Types/company'
import MetricsRowList from 'Components/MetricsRow/MetricsRowList'
import CompanyTTMExplanation from 'Configs/CompanyTTMExplanation'
import Spinner from 'Components/Spinner/Spinner'

type Props = {}

const CompanyTTM = (props: Props) => {
  const { symbol } = useOutletContext<{ symbol: string }>();
  const [companyKeyMetrics, setCompanyKeyMetrics] = useState<CompanyKeyMetrics>();
  const [apiRequestError, setApiRequestError] = useState<string>();
  useEffect(() => { 
    const fetchCompanyTTM = async () => {
      const response = await getCompanyKeyMetrics(symbol);
      if (typeof response === 'string') {
        setApiRequestError(response);
      }
      else{
        setCompanyKeyMetrics(response?.data[0]);
      }
    }
    fetchCompanyTTM();
  }, []);

  // Define explanations for common financial metrics
  const getMetricExplanation = (metricName: string): string | undefined => {
    const explanations = CompanyTTMExplanation;
    return explanations[metricName];
  };

  const metricsData = companyKeyMetrics ? Object.entries(companyKeyMetrics).map(([key, value], index) => {
    const explanation = getMetricExplanation(key);
    // Debug: log keys that don't have explanations
    if (!explanation) {
      console.log('No explanation found for key:', key);
    }
    return {
      id: index,
      MetricsName: key,
      value: value,
      explanation: explanation
    };
  }).filter((data) => typeof data.value === 'number') : [];

  return (
    <div>
        {metricsData ? <MetricsRowList data={metricsData}/> : <Spinner />}
    </div>
  )
}

export default CompanyTTM