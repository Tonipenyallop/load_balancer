import {
  SERVER_PORT,
  SERVER2_PORT,
  SERVER3_PORT,
  LOAD_BALANCER_PORT,
} from "./ports.ts";

let currentIndex = 0;

const servers = [SERVER_PORT, SERVER2_PORT, SERVER3_PORT];
const getServer = () => {
  const server = servers[currentIndex];

  // moving current index to one step forward
  if (currentIndex === 2) currentIndex = 0;
  else currentIndex += 1;

  return server;
};

Deno.serve({ port: LOAD_BALANCER_PORT, hostname: "0.0.0.0" }, async (_req) => {
  const serverPort = getServer();
  const response = await fetch(`http://localhost:${serverPort}/`);

  // const response = await fetch(`http://localhost:${SERVER_PORT}/`);
  return response;
});
