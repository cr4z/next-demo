export function getNewArrayWithout(junkItem: string, oldArray: string[]): string[] {
  const i = oldArray.indexOf(junkItem);
  const newArray = Array.from(oldArray);
  newArray.splice(i, 1);
  return newArray;
}
