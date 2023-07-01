import { Draft } from "immer";
import create, {  State, StateCreator } from "zustand";
import { devtools, persist, PersistOptions } from "zustand/middleware";
import { withImmer } from "../middleware/withImmer";
export const createStoreWithPersist = <T extends State>(
  config: StateCreator<T>,
  persistOptions: PersistOptions<T>,
  options: Parameters<typeof devtools>[1]
) => {
  return create(devtools(persist(withImmer(config), persistOptions), options));
};
