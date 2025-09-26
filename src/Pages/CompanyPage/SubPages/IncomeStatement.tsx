import { getCompanyIncomeStatement } from 'api';
import { CompanyIncomeStatement } from 'Types/company';
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { IncomeStatementData } from 'Configs/TableConfig'
import Table from 'Components/Table/Table'
import Spinner from 'Components/Spinner/Spinner'

type Props = {}


const IncomeStatement = (props: Props) => {
  const { symbol } = useOutletContext<{ symbol: string }>();
  const [companyIncomeStatement, setCompanyIncomeStatement] = useState<CompanyIncomeStatement[]>();
  const [apiRequestError, setApiRequestError] = useState<string>();
  useEffect(() => {
    const fetchCompanyIncomeStatement = async () => {
      const response = await getCompanyIncomeStatement(symbol);
      if (typeof response === 'string') {
        setApiRequestError(response);
      }
      else{
        setCompanyIncomeStatement(response?.data);
      }
    }
    fetchCompanyIncomeStatement();
  }, []);

  return (
    <div>
      <h2>Income Statement</h2>
      {companyIncomeStatement ? <Table data={companyIncomeStatement} config={IncomeStatementData} /> : <Spinner />}
    </div>
  )
}

export default IncomeStatement