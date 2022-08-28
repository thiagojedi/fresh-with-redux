/** @jsx h */
import { h } from "preact";

import CounterButtonsIsland from "../islands/counter-buttons-island.tsx";
import CounterLabelIsland from "../islands/counter-label-island.tsx";
import Counter from "../islands/counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>

      <div>
        <Counter step={3} />
      </div>

      <div
        style={{
          margin: "10px 0",
        }}
      >
        <p>
          <CounterLabelIsland />
        </p>

        <CounterButtonsIsland />
      </div>
    </div>
  );
}
