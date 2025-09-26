import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyCashFlow } from "api";
import { CompanyCashFlow } from "Types/company";
import { CompanyCashFlowData } from "Configs/TableConfig";
import Table from "Components/Table/Table";
import Spinner from "Components/Spinner/Spinner";

const CompanyCashFlowPage = () => {
    const { symbol } = useParams();
    const [companyCashFlow, setCompanyCashFlow] = useState<CompanyCashFlow[]>();
    const [apiRequestError, setApiRequestError] = useState<string>();

    useEffect(() => {
        const fetchCompanyCashFlow = async () => {
            if (!symbol) return;
            
            try {
                const response = await getCompanyCashFlow(symbol);
                if (typeof response === 'string') {
                    setApiRequestError(response);
                }else {
                    setCompanyCashFlow(response?.data);
                }
            } catch (err) {
                setApiRequestError("Failed to fetch company cash flow data");
            }
        };

        fetchCompanyCashFlow();
    }, [symbol]);

    return (
        <div>
            <h2>Cash Flow Statement - {symbol}</h2>
            {companyCashFlow ? <Table data={companyCashFlow} config={CompanyCashFlowData} /> : <Spinner />}
        </div>
    );
};

export default CompanyCashFlowPage;
