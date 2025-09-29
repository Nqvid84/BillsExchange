import React, { useState } from "react";
import { Cards } from "./component/cards";
import type { bills, exchange } from "./types";
import { exchangeQuinary } from "./utils/exchange";
import { initialExchange } from "./constants";

const App: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [exchange, setExchange] = useState<exchange>(initialExchange);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number(e.target.value) || 0) 
    
    setAmount(value);
    setExchange(exchangeQuinary(value));
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-100 text-gray-900 px-6">
      <h1 className="text-lg md:text-xl font-bold mb-8 tracking-tight">
        Cash Exchange
      </h1>

      <input
        type="number"
        value={amount}
        onChange={handleInput}
        placeholder="Enter amount"
        className="w-64 text-center text-2xl font-medium p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-2xl">
        {Object.entries(exchange).map(([bill, count]) => (
          <Cards bill={bill as unknown as bills} count={count} />
        ))}
      </div>
      <div className="fixed bottom-4 w-full flex justify-between items-center px-4">
        <p>Navid Neisi</p>
        <div className="flex flex-row gap-4 justify-center items-center">
          <a className=" text-blue-500 bg-blue-500/20 rounded-lg px-4 py-1" href="https://github.com/Nqvid84/BillsExchange/blob/main/src/utils/exchange.ts">TS Code</a>
          <a className=" text-blue-500 bg-blue-500/20 rounded-lg px-4 py-1" href="https://github.com/Nqvid84/BillsExchange/blob/main/src/utils/exchange.cpp">CPP Code</a>
        </div>
      </div>
    </div>
  );
};

export default App;
