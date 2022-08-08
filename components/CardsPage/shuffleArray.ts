import chars from '../../util/charMap';

export default function shuffleArray() {
  const array = [...chars];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.filter(chars => chars.armenian.length === 1) as typeof chars;
}
