import redisClient from './redisClient';
import convertObjectToArray from '../utilities/convertObjectToArray';
import calculateTts from '../utilities/calculateTts';

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

class Cache {
  static getProduct = async (productId) => {
    let product;
    if (productId) {
      product = await getObject({
        key: `products:${productId}`,
        parseArray: [],
      });
    }
    if (product) {
      product.id = Number(product.id);
      product.trueToSizeCalculation = Number(product.trueToSizeCalculation);
    }
    return product;
  }

  static setProduct = async (productId, product) => {
    await setObject({
      key: `products:${productId}`,
      data: product,
      stringifyArray: [],
    });
  }

  static getShoe = async (shoeId) => {
    let shoe;
    if (shoeId) {
      shoe = await getObject({
        key: `shoes:${shoeId}`,
        parseArray: [],
      });
    }
    if (shoe) {
      shoe.id = Number(shoe.id);
      shoe.productId = Number(shoe.productId);
    }
    return shoe;
  }

  static setShoe = async (shoeId, shoe) => {
    await setObject({
      key: `shoes:${shoeId}`,
      data: shoe,
      stringifyArray: [],
    });
  }

  static getReviews = async (productId) => {
    const reviews = await redisClient.smembers(`products:${productId}:reviews`);
    return reviews.map((review) => JSON.parse(review));
  }

  static setReviews = async (productId, reviews) => {
    const existingReviews = await Cache.getReviews(productId);
    const trueToSizeCalculation = calculateTts([...existingReviews, ...reviews]);
    await redisClient.set(`products:${productId}:trueToSizeCalculation`, trueToSizeCalculation);
    const stringifiedReviews = reviews.map((review) => JSON.stringify(review));
    await redisClient.sadd(`products:${productId}:reviews`, ...stringifiedReviews);
  }

  static getTrueToSizeCalculation = async (productId) => {
    const ttsCalc = await redisClient.get(`products:${productId}:trueToSizeCalculation`);
    return ttsCalc;
  }
}

export default Cache;
