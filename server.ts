const SERVER_PORT = Number(Deno.args[0]);

function wait(time: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, time));
}

const conn = Deno.listen({ port: SERVER_PORT });
console.log(`Listing PORT :${Deno.args}`);

let locks = 2;
while (true) {
  console.log("---------------");
  console.log("outer loop starts");
  const httpConn = Deno.serveHttp(await conn.accept());

  /*
   JS async await is too good. It will keep waiting till receives all of Promise. 
   Once it finishes to receive it, then start to resolve it one by one.
   We want slow server in this project. Thus, make "lock" for limiting Promise like this
   */
  if (locks === 0) {
    await wait(1000);
  }
  locks -= 1;

  (async () => {
    while (true) {
      console.log("loop starts");
      console.log("locks", locks);

      const requestEvent = await httpConn.nextRequest();

      if (requestEvent === null) {
        break;
      }

      await requestEvent.respondWith(new Response("Hello World"));
      console.log(`response sent from ${SERVER_PORT}`);
      locks += 1;
    }
  })();
}
