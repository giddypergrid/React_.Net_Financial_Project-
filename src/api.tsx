import axios from "axios";
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch2, CompanyBalanceSheet, CompanyCashFlow } from "Types/company";

const searchCompanies = async (query: string) => {
    try{
        const response = await axios.get<CompanySearch2[]>(`https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=${query}&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error searching companies:', error);
            return error.message;
        } else {
            console.error('unexpected error', error);
            return 'Unexpected error in searchCompanies'
        }
    }
}

const getCompanyProfile = async (query: string) => {
    try{
        const response = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company profile:', error);
            return error.message;
        }else{
            return 'Unexpected getting company profile';
        }
    }
}

const getCompanyKeyMetrics = async (query: string) => {
    try{
        const response = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company key metrics:', error);
            return error.message;
        }else{
            return 'Unexpected getting company key metrics';
        }
    }
}

const getCompanyIncomeStatement = async (query: string) => {
    try{
        const response = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/stable/income-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company income statement:', error);
            return error.message;
        }else{
            return 'Unexpected getting company income statement';
        }
    }
}

const getCompanyBalanceSheet = async (query: string) => {
    try{
        const response = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company balance sheet:', error);
            return error.message;
        }else{
            return 'Unexpected getting company balance sheet';
        }
    }
}

const getCompanyCashFlow = async (query: string) => {
    try{
        const response = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&limit=5&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company cash flow:', error);
            return error.message;
        }else{
            return 'Unexpected getting company cash flow';
        }
    }
}

const getCompanyPeers = async (query: string) => {
    try{
        const response = await axios.get<{symbol: string}[]>(`https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${process.env.REACT_APP_FINANCIAL_KEY}`)
        return response;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.error('Error getting company peers:', error);
            return error.message;
        }else{
            return 'Unexpected getting company peers';
        }
    }
}


export { searchCompanies, getCompanyProfile, getCompanyKeyMetrics, getCompanyIncomeStatement, getCompanyBalanceSheet, getCompanyCashFlow, getCompanyPeers };