export default function getListStudentIDs(arr) {
  if (Array.isArray(arr)) {
    const ids = arr.map((value) => value.id);
    return ids;
  }
  return [];
}
