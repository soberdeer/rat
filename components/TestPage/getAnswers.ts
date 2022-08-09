import charMap from '../../util/charMap';
import { CharType } from '../../util/charType';
import shuffleChars from '../../util/shuffleChars';

export default function getAnswers(currentChar: CharType) {
  const randomAnswers = charMap
    .filter(chars => chars.armenian.length === 1)
    .filter(chars => chars.cyrillic !== currentChar.cyrillic)
    .sort(() => 0.5 - Math.random()).slice(0, 3);

  return shuffleChars([...randomAnswers, currentChar], true);
}
