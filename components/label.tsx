/** @jsx h */
import { h } from "preact";

import { useAppSelector } from "../store/store.ts";

const Label = () => {
  const count = useAppSelector((state) => state.count.quantity);

  return <span>{count}</span>;
};

export default Label;
