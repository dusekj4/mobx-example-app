import { observable } from 'mobx';

export class MarketModel {
  @observable public 'volume': number;
  @observable public 'latest_trade': number;
  @observable public 'weighted_price': number;
  @observable public 'bid': number;
  @observable public 'ask': number;
  @observable public 'symbol': string;
  @observable public 'duration': number;
  @observable public 'currency_volume': number;
}

export default MarketModel;
