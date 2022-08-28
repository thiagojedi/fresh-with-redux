/** @jsx h */
import { IS_BROWSER } from "$fresh/runtime.ts";
import { h } from "preact";
import { useDispatch, useSelector } from "../store/hooks.ts";

type CounterProps = {
  step: number;
};

export default function Counter(props: CounterProps) {
  const { step = 1 } = props;
  const count = useSelector((state) => state.count.quantity);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => dispatch({ type: "increment", payload: step })}
        disabled={!IS_BROWSER}
      >
        +{step}
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: step })}
        disabled={!IS_BROWSER}
      >
        -{step}
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        disabled={!IS_BROWSER}
      >
        0
      </button>
    </div>
  );
}
