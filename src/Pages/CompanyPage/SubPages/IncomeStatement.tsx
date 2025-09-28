import { getCompanyIncomeStatement } from 'Api/api';
import { CompanyIncomeStatement } from 'Types/company';
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { IncomeStatementData } from 'Configs/TableConfig'
import Table from 'Components/Table/Table'
import Spinner from 'Components/Spinner/Spinner'
import check_response from 'Api/apiProcess';

type Props = {}


const IncomeStatement = (props: Props) => {
  const { symbol } = useOutletContext<{ symbol: string }>();
  const [companyIncomeStatement, setCompanyIncomeStatement] = useState<CompanyIncomeStatement[]>();
  const [enabledSpinner, setEnabledSpinner] = useState( true);
  useEffect(() => {
    const fetchCompanyIncomeStatement = async () => {
      const response = await getCompanyIncomeStatement(symbol);
      const isValid = check_response(response, symbol);
      setCompanyIncomeStatement(isValid?response?.data:undefined);
      setEnabledSpinner(false);
    }
    fetchCompanyIncomeStatement();
  }, [symbol]);

  return (
    <div>
      <h2>Income Statement</h2>
      {companyIncomeStatement && <Table data={companyIncomeStatement} config={IncomeStatementData} />}
      {enabledSpinner && <Spinner />}
    </div>
  )
}

export default IncomeStatement