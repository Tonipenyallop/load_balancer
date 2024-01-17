// 2. sends a lots of request(load tester)

console.time("test speed");
Promise.all(
  Array.from({ length: 10000 }).map(() => fetch("http://localhost:8000/"))
).then(() => console.timeEnd("test speed"));
