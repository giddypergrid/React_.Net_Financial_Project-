import React from 'react';
import Card from './Card';
import './CardList.css';
import { JSX } from 'react/jsx-runtime';
import { CompanySearch2 } from 'Types/company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    CardListData: CompanySearch2[];
    addPortfolio: (e: any) => void;
}

const CardList: React.FC<Props> = ({ CardListData, addPortfolio }): JSX.Element => {
    // Sort stocks by ticker alphabetically
    const sortedStocks = [...CardListData].sort((a, b) => 
        a.symbol.localeCompare(b.symbol)
    );

    return (
        <div className="card-list">
            {sortedStocks.length > 0 ? (
                sortedStocks.map((stock, index) => (
                    <Card
                        key={`${stock.symbol}-${stock.date}-${index}`}
                        id={stock.symbol}
                        data={stock}
                        addPortfolio={addPortfolio}
                    />
                ))
            ) : (
                <h1>No Results Found</h1>
            )}
        </div>
    );
};

export default CardList;