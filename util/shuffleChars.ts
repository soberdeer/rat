import chars from './charMap';
import { CharType } from './charType';

export default function shuffleChars(arr?: CharType[], disableFilter?: boolean) {
  const array = arr || [...chars];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return disableFilter ? array : array.filter(chars => chars.armenian.length === 1) as CharType[];
}
