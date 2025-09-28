import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyCashFlow } from "Api/api";
import { CompanyCashFlow } from "Types/company";
import { CompanyCashFlowData } from "Configs/TableConfig";
import Table from "Components/Table/Table";
import Spinner from "Components/Spinner/Spinner";
import check_response from "Api/apiProcess";

const CompanyCashFlowPage = () => {
    const { symbol } = useParams();
    const [companyCashFlow, setCompanyCashFlow] = useState<CompanyCashFlow[]>();
    const [enabledSpinner, setEnabledSpinner] = useState( true);
    

    useEffect(() => {
        const fetchCompanyCashFlow = async () => {
            if (!symbol) return;
            const response = await getCompanyCashFlow(symbol);
            const isValid = check_response(response, symbol);
            setCompanyCashFlow(isValid?response?.data:undefined);
            setEnabledSpinner(false);
        };

        fetchCompanyCashFlow();
    }, [symbol]);

    return (
        <div>
            <h2>Cash Flow Statement - {symbol}</h2>
            {companyCashFlow && <Table data={companyCashFlow} config={CompanyCashFlowData} />}
            {enabledSpinner && <Spinner />}
        </div>
    );
};

export default CompanyCashFlowPage;
