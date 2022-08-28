/** @jsx h */
import { h } from "preact";

import Button from "../components/button.tsx";
import StoreProvider from "../store/provider.tsx";

const CounterButtonsIsland = () => (
  <StoreProvider>
    <Button label="Increment" value={1} type="increment" />
    <Button label="Decrement" value={1} type="decrement" />
    <Button label="Reset" type="reset" />
  </StoreProvider>
);

export default CounterButtonsIsland;
