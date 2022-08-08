import charMap from '../../util/charMap';

export default function chunkGenerator(n: number, isArmenian?: boolean) {
  const filteredMap = charMap
    .filter(char => char.armenian.length === 1)
    .sort((char, char2) => (
      isArmenian ?
        char.armenian > char2.armenian ? 1 : -1 :
        char.cyrillic > char2.cyrillic ? 1 : -1
    ));
  let newChunk = [];
  for (let i = 0; i < filteredMap.length; i += n) {
    newChunk.push(filteredMap.slice(i, i + n));
  }
  return newChunk;
}
