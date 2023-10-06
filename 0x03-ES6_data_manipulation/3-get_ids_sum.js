export default function getListStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    const sumId = arr.reduce((total, element) => total + element.id, 0);
    return sumId;
  }
  return [];
}
