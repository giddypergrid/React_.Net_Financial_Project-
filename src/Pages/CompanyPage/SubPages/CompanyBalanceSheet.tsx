import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getCompanyBalanceSheet } from 'api'
import { CompanyBalanceSheet as CompanyBalanceSheetType } from 'Types/company'
import { CompanyBalanceSheetData } from 'Configs/TableConfig'
import Table from 'Components/Table/Table'
import Spinner from 'Components/Spinner/Spinner'

type Props = {}

const CompanyBalanceSheet = (props: Props) => {
  const { symbol } = useOutletContext<{ symbol: string }>();
  const [companyBalanceSheet, setCompanyBalanceSheet] = useState<CompanyBalanceSheetType[]>();
  const [apiRequestError, setApiRequestError] = useState<string>();
  useEffect(() => {
    const fetchCompanyBalanceSheet = async () => {
      const response = await getCompanyBalanceSheet(symbol);
      if (typeof response === 'string') {
        setApiRequestError(response);
      }
      else{
        setCompanyBalanceSheet(response?.data);
      }
    }
    fetchCompanyBalanceSheet();
  }, []);
  return (
    <div>
      <h2>Company Balance Sheet</h2>
      {companyBalanceSheet ? <Table data={companyBalanceSheet} config={CompanyBalanceSheetData} /> : <Spinner />}
    </div>
  )
}

export default CompanyBalanceSheet