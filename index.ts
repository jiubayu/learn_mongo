import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const results = [
  {
    name: 'ben',
    age: 18,
  },
  {
    name: 'dg',
    age: 36,
  },
];
async function run() {
  try {
    await client.connect();
    const db = client.db('hello');
    const res = await db.command({ping: 1});
    // 数据的插入
    const userCollection = db.collection('user');
    //  const result = await userCollection.insertOne({name: 'AD', age: 28});
    //  const ress = await userCollection.insertMany(results);
    // const result = await userCollection.findOne({name: 'AD'});
    // const results = await userCollection.find().toArray();
    /** 1 比较操作符 */
    // const results = await userCollection.find({age: {$gt: 30}}).toArray();
    // const results = await userCollection.find({age: {$lt: 30}}).toArray();
    /** 2 逻辑操作符 */
    const results = await userCollection.find({age: {$lt: 30}, name: 'AD'}).toArray();
    console.log(results, 'ress---');
  } catch (err) {
    console.log(err, 'err-');
  } finally {
    await client.close();
  }
}

run();
