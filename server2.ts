import { SERVER2_PORT } from "./ports.ts";
Deno.serve({ port: SERVER2_PORT }, () => {
  return new Response("server2");
});
