# Load balancer project

- https://samwho.dev/load-balancing/

# Test speed

## 1 server

- input number = 1000
- test speed: 1179ms

- input number = 10000
- test speed: 3430ms

<!-- after removing timeout -->

- input number = 10000
  test speed: 1951ms
  test speed: 1553ms

- input number = 20000
  test speed: 5738ms

## 2 servers

- input number = 10000
  test speed: 3544ms
  test speed: 3690ms

## 3 servers

- input number = 10000
  test speed: 5808ms
  test speed: 3503ms
  test speed: 7100ms

  <!-- after removing timeout -->

  test speed: 1596ms
  test speed: 1652ms
  test speed: 1479ms

- input number = 20000
  test speed: 6515ms

## Lower the speed to 1000ms for 10K inputs
