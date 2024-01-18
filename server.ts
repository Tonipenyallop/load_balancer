import { SERVER_PORT } from "./ports.ts";
Deno.serve({ port: SERVER_PORT }, (_request: Request) => {
  console.log("server received request mate");
  // 1. after waiting 1 second
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(new Response("TONI BLOG!"));
      }, 1000);
    } catch (err) {
      reject(new Response(`err while sending response: ${err}`));
    }
  });
});
