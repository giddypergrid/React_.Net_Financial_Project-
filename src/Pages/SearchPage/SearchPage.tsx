import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './SearchPage.css';
import CardList from 'Components/Card/CardList';
import { CompanySearch2 } from 'Types/company';
import { searchCompanies } from 'Api/api';
import PortfolioList from 'Components/Portfolio/PortfolioList';
import SearchBar from 'Components/SearchBar/SearchBar';
type Props = {}

function SearchPage({}: Props) {
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<CompanySearch2[]>([]);
    const [apiRequestError, setApiRequestError] = useState<string>('');
    const [stockPortfolioValues, setStockPortfolioValues] = useState<string[]>([]);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    }
    const addPortfolio = (e: any) => {
    e.preventDefault();
    const stockSymbol = e.target[0].value;
    if (!stockPortfolioValues.includes(stockSymbol)) {
        setStockPortfolioValues([...stockPortfolioValues, stockSymbol]);
    }
    }
    const removePortfolio = (e:any) => {
    e.preventDefault();
    const stockSymbol = e.target[0].value;
    setStockPortfolioValues(stockPortfolioValues.filter((symbol) => symbol !== stockSymbol));
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const results = await searchCompanies(search);
    if (typeof results === 'string') {
        setApiRequestError(results);
    } else if (Array.isArray(results.data)){
        setSearchResults(results.data);
        apiRequestError && setApiRequestError('');
    } 
    }
    return (
    <div className="search-page">
        <SearchBar 
          search={search}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
        {apiRequestError && <div className="error-message">{apiRequestError}</div>}
        <div className="search-page-content">
        <PortfolioList symbolList={stockPortfolioValues} removePortfolio={removePortfolio} />
        <main>
            <CardList CardListData={searchResults.slice(0, 10)} addPortfolio={addPortfolio} />
        </main>
        </div>
    </div>
    );
}
export default SearchPage