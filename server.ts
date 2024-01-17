Deno.serve(async (_request: Request) => {
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

// 3. load balancer
