export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const newMap = map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return newMap;
}
