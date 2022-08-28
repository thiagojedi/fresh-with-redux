/** @jsx h */
import { FunctionalComponent, h } from "preact";
import { useAppDispatch } from "../store/store.ts";

const Button: FunctionalComponent<
  { type: string; value?: number; label: string }
> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch({ type: props.type, payload: props.value })}
    >
      {props.label}
    </button>
  );
};

export default Button;
