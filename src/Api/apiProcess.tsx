import { QueryCompanySymbol } from 'Configs/QueryCompanySymbol';
import { AxiosResponse } from 'axios'
import OverlayMessageBoard from 'Components/Modal/OverlayMessageBoard'

const response_code = {
  success: 'success',
  unknown_error: 'unknown api request error',
  unsupported_symbol: 'Symbol currently not availablefor further query',
}
const showErrorAndReturn = (code: string, replace_msg?: string) => {
  const message = replace_msg ? replace_msg : code;
  OverlayMessageBoard.openOverlayMessageBoard(message);
  return false;
}
// Type Guard that checks if the response is a valid AxiosResponse
// Optionally validates a provided symbol against QueryCompanySymbol
const check_response = (
  response: AxiosResponse|string,
  symbol?: string
): response is AxiosResponse => {
  if (typeof response === 'string') {
    if (symbol && !QueryCompanySymbol.includes(symbol)) {
      return showErrorAndReturn(response_code.unsupported_symbol);
    }
    return showErrorAndReturn(response_code.unknown_error, response);
  }
  return true;
}

export default check_response