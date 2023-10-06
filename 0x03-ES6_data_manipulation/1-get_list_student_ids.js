export default function getListStudentIDs(arr) {
  if (typeof arr === 'object') {
    const ids = arr.map((value) => value.id);
    return ids;
  }
  return [];
}
