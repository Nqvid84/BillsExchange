import type { bills, exchange as exchangeType } from "../types"
import { initialExchange } from "../constants"

export const exchangeQuinary = (amount: number): exchangeType => {
    const exchanges: exchangeType = initialExchange;

    const totalFives = Math.floor(amount / 5);

    exchanges[25] = Math.floor(totalFives / 5);
    exchanges[10] = Math.floor((totalFives % 5) / 2);
    exchanges[5]  = (totalFives % 5) % 2;

    exchanges[1]  = amount % 5;

    return exchanges;
}

export const exchangeGreedy = (amount: number, bills: bills[]): exchangeType => {
    const exchanges: exchangeType = initialExchange;

    for (const bill of bills) {
        exchanges[bill] = Math.floor(amount / bill);
        amount %= bill;
    }

    exchanges[1] = amount;

    return exchanges;
}