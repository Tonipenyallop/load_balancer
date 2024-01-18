import { LOAD_BALANCER_PORT } from "./ports.ts";

console.time("test speed");
Promise.all(
  Array.from({ length: 10000 }).map(() =>
    fetch(`http://localhost:${LOAD_BALANCER_PORT}/`)
  )
).then(() => console.timeEnd("test speed"));
