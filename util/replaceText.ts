import charMap, { doubleChars } from './charMap';

const isCapital = (char: string) => /^[А-Я]*$/.test(char);

export type ResultType = { paragraph: string, startIndex: number, length: number, array: string[] }

export default function replaceText(value: string): ResultType[] {
  return doubleChars
    .reduce((prev, current) => (
      prev.replaceAll(current.cyrillic, current.armenian)), value)
    .split('')
    .map(char => {
      const item = charMap.find(el => el.cyrillic === char.toLowerCase());
      if (!item) {
        return char;
      }
      return isCapital(char) ? item.armenian.toUpperCase() : item.armenian;
    })
    .join('')
    .split('\n')
    .reduce((previous, current, i) => {
      if (current.length === 0) {
        return [...previous, {
          array: [''],
          paragraph: current || '',
          startIndex: previous.length === 0 ? 0 : previous[i - 1].startIndex + previous[i - 1].length,
          length: 0,
        }]
      }
      const array = current.replaceAll('\n', '').split(' ');
      return [...previous, {
        array,
        paragraph: current || '',
        startIndex: previous.length === 0 ? 0 : previous[i - 1].startIndex + previous[i - 1].length,
        length: array.length
      }];
    }, [] as ResultType[]);
}
