export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const resultString = filteredValues.map((value) => value.replace(startString, '')).join('-');

  return resultString;
}
