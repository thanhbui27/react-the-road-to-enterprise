import { State, StateCreator } from "zustand";
import { produce, Draft } from "immer";
export const withImmer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === "function"
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState as any, replace);
      },
      get,
      api
    );
