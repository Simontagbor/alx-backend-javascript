export default function getResponseFromAPI() {
  const weather = new Promise(((resolve, reject) => {
    setTimeout(() => {
      resolve('Rainy');
    }, 1);
    const state = true;
    if (!state) {
      reject('error');
    }
  }));
  return weather;
}
