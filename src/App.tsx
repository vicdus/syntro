import React, { useEffect, useState } from "react";
import _ from "lodash";
import { std } from "mathjs";

type Quote = {
  close: Array<number>,
  high: Array<number>,
  low: Array<number>,
  open: Array<number>,
  volume: Array<number>,
};

type Meta = {
  currency: "USD",
  symbol: string,
  firstTradeDate: number,
  regularMarketTime: number,
};

interface YahooFianceResponse {
  chart: {
    result: Array<{
      indicators: { quote: Array<Quote>; },
      meta: Meta,
      timestamp: Array<number>;
    }>;
  };
}

type Equity = {
  timestamp: Array<number>,
  quote: Quote;
  std: number;
};



const BASE = "https://query2.finance.yahoo.com/v8/finance/chart/";


async function fetchStock(symbol: string, last?: number): Promise<Equity> {
  const response = await fetch(`${BASE}${symbol}`);
  const responseJson: YahooFianceResponse = await response.json();
  const meta = responseJson.chart.result[0].meta;

  const url = `${BASE}${symbol}?interval=1d&period1=${meta.firstTradeDate}&period2=${meta.regularMarketTime}`;
  const response2 = await fetch(url);
  const responseJson2: YahooFianceResponse = await response2.json();


  return {
    timestamp: _.takeRight(responseJson2.chart.result[0].timestamp, last),
    quote: {
      close: _.takeRight(responseJson2.chart.result[0].indicators.quote[0].close, last),
      high: _.takeRight(responseJson2.chart.result[0].indicators.quote[0].high, last),
      low: _.takeRight(responseJson2.chart.result[0].indicators.quote[0].low, last),
      open: _.takeRight(responseJson2.chart.result[0].indicators.quote[0].open, last),
      volume: _.takeRight(responseJson2.chart.result[0].indicators.quote[0].volume, last),
    },
    std: std(_.takeRight(responseJson2.chart.result[0].indicators.quote[0].close, last)) / (_.last(responseJson2.chart.result[0].indicators.quote[0].close) ?? 0)
  };
}

type StockInfo = { [key: string]: { share: number, std: number; }; };

function App() {
  const [stockInfo, setStockInfo] = useState<StockInfo>({});
  useEffect(() => {
    (async () => {
      const UPRO = await fetchStock('UPRO', 10);
      const TQQQ = await fetchStock('TQQQ', 10);
      const TMF = await fetchStock('TMF', 10);

      const UPRO_i = 1 / UPRO.std;
      const TQQQ_i = 1 / TQQQ.std;
      const TMF_i = 1 / TMF.std;
      const total_std_i = UPRO_i + TQQQ_i + TMF_i;

      const UPRO_p = UPRO_i / total_std_i;
      const TQQQ_p = TQQQ_i / total_std_i;
      const TMF_p = TMF_i / total_std_i;
      setStockInfo({
        UPRO: { share: UPRO_p, std: UPRO.std, },
        TQQQ: { share: TQQQ_p, std: TQQQ.std, },
        TMF: { share: TMF_p, std: TMF.std, },
      });
    })();
  }, []);


  return (
    <div className="App">
      {Object.entries(stockInfo).map(([stock, info]) =>
        <div> {stock + " " + Math.round(info.share * 100) + " %, std = " + info.std} </div>
      )}
    </div>
  );
}

export default App;
