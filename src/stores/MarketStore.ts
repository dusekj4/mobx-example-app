import { MarketModel } from '../models';
import { useLocalStore } from 'mobx-react';

export const useMarketStore = (defaultMarkets: MarketModel[] = []) => {
  const store = useLocalStore(() => ({
    markets: defaultMarkets,
    addMarkets(values: Array<MarketModel>): void {
      store.markets = values
    },
  }));
  return store;
};
