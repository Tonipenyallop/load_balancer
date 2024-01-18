import { SERVER_PORT, LOAD_BALANCER_PORT } from "./ports.ts";

Deno.serve({ port: LOAD_BALANCER_PORT, hostname: "0.0.0.0" }, async (_req) => {
  console.log("request received");

  const response = await fetch(`http://localhost:${SERVER_PORT}/`);
  console.log("response");
  console.log(response);
  return response;
});
