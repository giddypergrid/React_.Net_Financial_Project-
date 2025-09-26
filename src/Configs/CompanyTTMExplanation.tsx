const explanations: { [key: string]: string } = {
    // Basic Company Information
    'symbol': 'Company symbol - unique identifier for the company\'s stock',
    'marketCap': 'Market capitalization - total market value of all outstanding shares',
    
    // Enterprise Value Metrics
    'enterpriseValueTTM': 'Enterprise value - market cap plus debt minus cash and cash equivalents',
    'evToSalesTTM': 'Enterprise Value to Sales - EV divided by revenue',
    'evToOperatingCashFlowTTM': 'Enterprise Value to Operating Cash Flow ratio',
    'evToFreeCashFlowTTM': 'Enterprise Value to Free Cash Flow ratio',
    'evToEBITDATTM': 'Enterprise Value to EBITDA - EV divided by earnings before interest, taxes, depreciation, and amortization',
    'netDebtToEBITDATTM': 'Net debt to EBITDA - net debt divided by EBITDA',
    
    // Liquidity and Quality Ratios
    'currentRatioTTM': 'Current ratio - current assets divided by current liabilities',
    'incomeQualityTTM': 'Income quality - operating cash flow divided by net income',
    
    // Graham Valuation Metrics
    'grahamNumberTTM': 'Graham Number - square root of 22.5 times earnings per share times book value per share',
    'grahamNetNetTTM': 'Graham Net-Net - net current asset value per share',
    
    // Financial Burden Metrics
    'taxBurdenTTM': 'Tax Burden - effective tax rate as percentage of pre-tax income',
    'interestBurdenTTM': 'Interest Burden - interest expense as percentage of operating income',
    
    // Working Capital and Asset Metrics
    'workingCapitalTTM': 'Working Capital - current assets minus current liabilities',
    'investedCapitalTTM': 'Invested Capital - total equity plus total debt minus cash and cash equivalents',
    'tangibleAssetValueTTM': 'Tangible Asset Value - total assets minus intangible assets and goodwill',
    'netCurrentAssetValueTTM': 'Net Current Asset Value - current assets minus total liabilities',
    
    // Return on Investment Metrics
    'returnOnAssetsTTM': 'Return on Assets - net income divided by total assets',
    'operatingReturnOnAssetsTTM': 'Operating Return on Assets - operating income divided by total assets',
    'returnOnTangibleAssetsTTM': 'Return on Tangible Assets - net income divided by tangible assets',
    'returnOnEquityTTM': 'Return on Equity - net income divided by shareholders\' equity',
    'returnOnInvestedCapitalTTM': 'Return on Invested Capital - net operating profit after tax divided by invested capital',
    'returnOnCapitalEmployedTTM': 'Return on Capital Employed - EBIT divided by capital employed',
    
    // Yield Metrics
    'earningsYieldTTM': 'Earnings yield - earnings per share divided by price per share',
    'freeCashFlowYieldTTM': 'Free cash flow yield - free cash flow divided by market capitalization',
    
    // Capital Expenditure Ratios
    'capexToOperatingCashFlowTTM': 'Capex to Operating Cash Flow - capital expenditures divided by operating cash flow',
    'capexToDepreciationTTM': 'Capex to Depreciation - capital expenditures divided by depreciation',
    'capexToRevenueTTM': 'Capex to Revenue - capital expenditures as percentage of revenue',
    
    // Expense Ratios
    'salesGeneralAndAdministrativeToRevenueTTM': 'SG&A to Revenue - selling, general & administrative expenses as percentage of revenue',
    'researchAndDevelopementToRevenueTTM': 'R&D to Revenue - research and development expenses as percentage of revenue (legacy spelling)',
    'stockBasedCompensationToRevenueTTM': 'Stock-based compensation to Revenue - stock compensation as percentage of revenue',
    'intangiblesToTotalAssetsTTM': 'Intangibles to Total Assets - intangible assets as percentage of total assets',
    
    // Average Balance Metrics
    'averageReceivablesTTM': 'Average Receivables - average accounts receivable over the period',
    'averagePayablesTTM': 'Average Payables - average accounts payable over the period',
    'averageInventoryTTM': 'Average Inventory - average inventory value over the period',
    
    // Days Outstanding Metrics
    'daysOfSalesOutstandingTTM': 'Days of Sales Outstanding - average collection period for receivables',
    'daysOfPayablesOutstandingTTM': 'Days of Payables Outstanding - average payment period for payables',
    'daysOfInventoryOutstandingTTM': 'Days of Inventory Outstanding - average days inventory is held before sale',
    
    // Cycle Metrics
    'operatingCycleTTM': 'Operating Cycle - days of inventory outstanding plus days of sales outstanding',
    'cashConversionCycleTTM': 'Cash Conversion Cycle - operating cycle minus days of payables outstanding',
    
    // Free Cash Flow Metrics
    'freeCashFlowToEquityTTM': 'Free Cash Flow to Equity - free cash flow available to equity holders',
    'freeCashFlowToFirmTTM': 'Free Cash Flow to Firm - free cash flow available to all capital providers'
  };

  export default explanations;