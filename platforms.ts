import { getDatabase } from './db';

interface Platform {
  name: string;
  price: number;
  hasFreeTrial: boolean;
}

const getCollection = async () => {
  const db = await getDatabase();
  return db.collection<Platform>('platforms'); // inserted a 'generic type', defining the shape of the collection.
};

export const createPlatform = async (platform: Platform) => {
  const col = await getCollection();
  const insertedResults = await col.insertOne(platform);
  return insertedResults.insertedId;
};

export const getPlatforms = async () => {
  const col = await getCollection();
  const ret = col.find({});
  return ret.toArray();
};
