import "vite/modulepreload-polyfill";
import register from "preact-custom-element";
import { useSignal } from "@preact/signals";
import Button from "@/components/Button.jsx";

const Counter = ({ start = 0 }) => {
  const count = useSignal(start);

  return (
    <div class="x-counter">
      <p class="x-counter__count">{count}</p>
      <Button onClick={() => count.value--}>-1</Button>
      <Button onClick={() => count.value++}>+1</Button>
    </div>
  );
};

register(Counter, "x-counter", ["start"], { shadow: false });
