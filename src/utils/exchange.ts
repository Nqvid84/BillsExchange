import { exchange as exchangeType } from "../types"
import { initialExchange } from "../constants"

export const exchange = (amount: number): exchangeType => {
    let exchanges: exchangeType = initialExchange;

    const totalFives = Math.floor(amount / 5);

    const exchanges['25'] = Math.floor(totalFives / 5);
    const exchanges['10'] = Math.floor((totalFives % 5) / 2);
    const exchanges['5']  = (totalFives % 5) % 2;

    const exchanges['1']  = amount % 5;

    return exchanges;
}