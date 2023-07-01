import { Draft } from "immer";
import create, {  State, StateCreator, StoreApi } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { withImmer } from "../middleware/withImmer";
export const createStoreWithSubscribe = <T extends State>(
  config: StateCreator<T>,
  options: Parameters<typeof devtools>[1]
) => {
  return create(devtools(subscribeWithSelector(withImmer(config)), options));
};
