import { observable } from 'mobx';

export class TodoModel {
  @observable public 'currency': string;
  @observable public '7d': string;
  @observable public '30d': string;
  @observable public '24h': string;
}

export default TodoModel;
