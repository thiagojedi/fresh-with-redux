/** @jsx h */
import { FunctionalComponent as FC, h } from "preact";
import { Provider } from "react-redux";
import store from "./store.ts";

// deno-lint-ignore no-explicit-any
const StoreProvider: FC<{ children: any }> = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);

export default StoreProvider;
