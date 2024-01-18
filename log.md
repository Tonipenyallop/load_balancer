# Test speed

- input number = 1000
- test speed: 1179ms

- input number = 10000
- test speed: 3430ms

## Lower the speed to 1000ms for 10K inputs

# Idea

- 1. create load balancer server
- 2. client send request to load balancer
- 3. load balancer send request to server
- 4. server respond to load balancer
- 5. load balancer respond to the client

# From here

- Make load balancer handler send request to 2 servers for optimize the time
