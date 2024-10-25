import { Redis } from "ioredis";

const redis = new Redis({
  host: "localhost",
  PORT: 6379,
});
export default redis;
