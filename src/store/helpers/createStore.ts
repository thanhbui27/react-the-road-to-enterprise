import { Draft } from "immer";
import create, { State, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { withImmer } from "../middleware/withImmer";
export const createStore = <T extends State>(
  config: StateCreator<T>,
  options: Parameters<typeof devtools>[1]
) => {
  return create(devtools(withImmer(config), options));
};
