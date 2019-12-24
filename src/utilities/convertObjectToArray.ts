const convertObjectToArray = (data) => {
  const objectAsArray: string[] = [];
  Object.keys(data).forEach((key) => {
    objectAsArray.push(key, data[key]);
  });
  return objectAsArray;
};

export default convertObjectToArray;
