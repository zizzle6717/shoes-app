import redisClient from './redisClient';
import convertObjectToArray from '../utilities/convertObjectToArray';

const getObject = async ({
  key,
  parseArray,
}) => {
  const obj = await redisClient.hgetall(key);
  parseArray.forEach((prop) => { obj[prop] = JSON.parse(obj[prop]); });

  // NOTE: Should return undefined if Redis returns an empty object
  return (obj && Object.keys(obj).length) ? obj : undefined;
};

const setObject = async ({
  key,
  data,
  stringifyArray,
}) => {
  const dataWithStringify = data;
  stringifyArray.forEach((prop) => { dataWithStringify[prop] = JSON.stringify(dataWithStringify[prop]); });
  const keyValues = convertObjectToArray(dataWithStringify);
  await redisClient.hset(key, ...keyValues);
};

// TODO: For scalability, reviews should be stored in a Redis list and keyed to each object
class Cache {
  static getProduct = async (productId) => {
    if (productId) {
      await getObject({
        key: `products:${productId}`,
        parseArray: ['shoes', 'reviews'],
      });
    }
  }

  static setProduct = async (productId, product) => {
    await setObject({
      key: `products:${productId}`,
      data: product,
      stringifyArray: ['shoes', 'reviews'],
    });
  }

  static getShoe = async (shoeId) => {
    if (shoeId) {
      await getObject({
        key: `shoes:${shoeId}`,
        parseArray: ['reviews'],
      });
    }
  }

  static setShoe = async (shoeId, shoe) => {
    await setObject({
      key: `shoes:${shoeId}`,
      data: shoe,
      stringifyArray: ['reviews'],
    });
  }
}

export default Cache;
