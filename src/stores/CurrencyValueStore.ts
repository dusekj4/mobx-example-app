import { TodoModel } from '../models';
import { useLocalStore } from 'mobx-react';

export const CurrencyValueStore = (defaultvalues: TodoModel[] = []) => {
  const store = useLocalStore(() => ({
    values: defaultvalues,
    addCurrencyValues(values: Array<TodoModel>): void {
      store.values = values
    },
  }));
  return store;
};
