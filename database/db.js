import allData from "./data";

class Database {
  constructor() {}

  async getAll() {
    const dataAsArray = allData;
    await randomDelay();
    return dataAsArray;
  }
}

const randomDelay = () =>
  new Promise((resolve) => {
    const max = 3500;
    const min = 1000;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });

export default Database;
