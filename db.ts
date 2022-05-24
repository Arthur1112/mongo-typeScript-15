import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const getDatabase = async () => {
  const client = new mongodb.MongoClient(process.env.MONGO_URL!); // add the bang to let TS know we will define it later
  await client.connect();

  return client.db('zachs-db');
};
