import { Draft } from "immer";
import create, { GetState, State, StateCreator, StoreApi } from "zustand";
import {
  devtools,
  persist,
  PersistOptions,
  subscribeWithSelector,
} from "zustand/middleware";
import { withImmer } from "../middleware/withImmer";
export const createStoreWithPersistAndSubscribe = <T extends State>(
  config: StateCreator<T>,
  persistOptions: PersistOptions<T>,
  options: Parameters<typeof devtools>[1]
) => {
  return create(
    devtools(
      subscribeWithSelector(persist(withImmer(config), persistOptions)),
      options
    )
  );
};
