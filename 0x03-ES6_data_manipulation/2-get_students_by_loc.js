export default function getListStudentsByLocation(arr, city) {
  if (Array.isArray(arr) && typeof city === 'string') {
    const sharedLocations = arr.filter((value) => value.location === city);
    return sharedLocations;
  }
  return [];
}
