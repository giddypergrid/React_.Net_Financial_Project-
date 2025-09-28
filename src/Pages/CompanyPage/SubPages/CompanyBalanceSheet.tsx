import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getCompanyBalanceSheet } from 'Api/api'
import { CompanyBalanceSheet as CompanyBalanceSheetType } from 'Types/company'
import { CompanyBalanceSheetData } from 'Configs/TableConfig'
import Table from 'Components/Table/Table'
import Spinner from 'Components/Spinner/Spinner'
import check_response from 'Api/apiProcess'
type Props = {}

const CompanyBalanceSheet = (props: Props) => {
  const { symbol } = useOutletContext<{ symbol: string }>();
  const [companyBalanceSheet, setCompanyBalanceSheet] = useState<CompanyBalanceSheetType[]>();
  const [enabledSpinner, setEnabledSpinner] = useState(true);
  useEffect(() => {
    const fetchCompanyBalanceSheet = async () => {
      const response = await getCompanyBalanceSheet(symbol);
      const isValid = check_response(response, symbol);
      setCompanyBalanceSheet(isValid?response?.data:undefined);
      setEnabledSpinner(false);
    }
    fetchCompanyBalanceSheet();
  }, [symbol]);
  return (
    <div>
      <h2>Company Balance Sheet</h2>
      {companyBalanceSheet && <Table data={companyBalanceSheet} config={CompanyBalanceSheetData} />}
      {enabledSpinner && <Spinner />}
    </div>
  )
}

export default CompanyBalanceSheet