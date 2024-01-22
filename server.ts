import { SERVER_PORT, SERVER2_PORT, SERVER3_PORT } from "./ports.ts";
Deno.serve({ port: SERVER_PORT }, (_request: Request) => {
  return new Promise((resolve, reject) => {
    try {
      // setTimeout(() => {
      resolve(new Response("TONI BLOG!"));
      // }, 1000);
    } catch (err) {
      reject(new Response(`err while sending response: ${err}`));
    }
  });
});

Deno.serve({ port: SERVER2_PORT }, () => {
  return new Promise((resolve, reject) => {
    try {
      // setTimeout(() => {
      resolve(new Response("TONI BLOG2!"));
      // }, 1000);
    } catch (err) {
      reject(new Response(`err while sending response: ${err}`));
    }
  });
});

Deno.serve({ port: SERVER3_PORT }, () => {
  return new Promise((resolve, reject) => {
    try {
      // setTimeout(() => {
      resolve(new Response("TONI BLOG3!"));
      // }, 1000);
    } catch (err) {
      reject(new Response(`err while sending response: ${err}`));
    }
  });
});
