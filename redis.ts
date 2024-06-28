import Redis from 'ioredis';
const redis = new Redis(6379);
const pub = new Redis(6379);
const sub = new Redis(6379);
async function run() {
  try {
    // @ts-ignore
    // await redis.set('name', 'dabao', 'ex', 10);
    const result = await redis.get('name');
    console.log(result, 'result');
    await redis.lpush('software', 'redis', 'mongo');
    const arr = await redis.lrange('software', 0 , 10);
    console.log(arr, 'arrr-- ')
    await redis.hmset('person', {name: 'dabao', age: 10})
    const obj = await redis.hgetall('person');
    console.log(obj, 'obj---')
    // pub/sub
    const r = await sub.subscribe('channel-1');
    console.log(r);
    sub.on('message', (channel, message) => {
      console.log(`Received ${message} from ${channel}`);
    })
    // pub 发送信息
    setTimeout(() => {
      pub.publish('channel-1', 'hello');
    }, 1000);
  } catch (e) {
    console.log(e,'eee---')
  } 
  // finally {
  //   redis.disconnect();
  // }
}
run();
