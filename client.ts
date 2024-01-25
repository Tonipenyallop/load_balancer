import { LOAD_BALANCER_PORT } from "./ports.ts";

const port = 8000;
console.time("test speed");
Promise.all(
  Array.from({ length: 6 }).map((_, idx) => {
    const req = new Request(`http://localhost:${LOAD_BALANCER_PORT}/`, {
      method: "POST",
      headers: {
        requestID: `${idx}`,
      },
    });

    console.log(`sending request ${idx}`);
    return fetch(req).then(async (response) => {
      const text = await response.text();

      console.log(`recieved response ${idx}:`, text);
    });
  })
).then(() => console.timeEnd("test speed"));
