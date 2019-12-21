import Redis from 'ioredis';

const redisClient = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);

redisClient.on('error', (err) => {
  console.warn(err);
});

export default redisClient;
