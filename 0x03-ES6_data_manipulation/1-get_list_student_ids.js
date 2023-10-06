export default function getListStudentIDs(arr) {
  const ids = [];
  if (typeof arr === 'object') {
    for (const value of arr) {
      ids.push(value.id);
    }
    return ids;
  }
  return [];
}
