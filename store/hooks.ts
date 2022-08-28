import { useEffect, useState } from "preact/hooks";

import store, { AppDispatch, RootState } from "./store.ts";

export function useSelector<T>(fn: (state: RootState) => T) {
  const [result, setResult] = useState<T>(fn(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setResult(fn(store.getState()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return result;
}

export const useDispatch: () => AppDispatch = () => store.dispatch;
