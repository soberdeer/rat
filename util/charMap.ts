const chars = [
  { cyrillic: 'а', armenian: 'ա', latin: 'a' },
  { cyrillic: 'б', armenian: 'բ', latin: 'b' },
  { cyrillic: 'в', armenian: 'վ', latin: 'v' },
  { cyrillic: 'г', armenian: 'գ', latin: 'g' },
  { cyrillic: 'д', armenian: 'դ', latin: 'd' },
  { cyrillic: 'е', armenian: 'ե', latin: 'e' },
  { cyrillic: 'ж', armenian: 'ժ', latin: 'zh' },
  { cyrillic: 'з', armenian: 'զ', latin: 'z' },
  { cyrillic: 'и', armenian: 'ի', latin: 'i' },
  { cyrillic: 'й', armenian: 'յ', latin: 'y' },
  { cyrillic: 'к', armenian: 'կ', latin: 'k' },
  { cyrillic: 'л', armenian: 'լ', latin: 'l' },
  { cyrillic: 'м', armenian: 'մ', latin: 'm' },
  { cyrillic: 'н', armenian: 'ն', latin: 'n' },
  { cyrillic: 'о', armenian: 'օ', latin: 'o' },
  { cyrillic: 'п', armenian: 'պ', latin: 'p' },
  { cyrillic: 'р', armenian: 'ր', latin: 'r' },
  { cyrillic: 'с', armenian: 'ս', latin: 's' },
  { cyrillic: 'т', armenian: 'տ', latin: 't' },
  { cyrillic: 'у', armenian: 'ւ', latin: 'w' },
  { cyrillic: 'ф', armenian: 'ֆ', latin: 'f' },
  { cyrillic: 'х', armenian: 'խ', latin: 'kh' },
  { cyrillic: 'х', armenian: 'հ', latin: 'h', option: 'Х(h)' },
  { cyrillic: 'ц', armenian: 'ց', latin: 'ts' },
  { cyrillic: 'ч', armenian: 'չ', latin: 'ch' },
  { cyrillic: 'ш', armenian: 'շ', latin: 'sh' },
  { cyrillic: 'щ', armenian: 'շչ', latin: 'sch' },
  { cyrillic: 'ы', armenian: 'ը', latin: 'ə' },
  { cyrillic: 'э', armenian: 'ե', latin: 'e', latin_option: 'E(ɛ)' },
  { cyrillic: 'ю', armenian: 'յւ', latin: 'yu' },
  { cyrillic: 'я', armenian: 'յա', latin: 'ya' },
  { cyrillic: 'сc', armenian: 'թ', latin: 'th' },
  { cyrillic: 'тс', armenian: 'ծ', latin: 'tch' },
  { cyrillic: 'дз', armenian: 'ձ', latin: 'dz' },
  { cyrillic: 'х', armenian: 'ղ', latin: 'r', latin_option: 'ġ', option: 'Х(г)' },//
  { cyrillic: 'тш', armenian: 'ճ', latin: 'tsh' },
  { cyrillic: 'дж', armenian: 'շ', latin: 'j' },
  { cyrillic: 'пх', armenian: 'փ', latin: 'ph' },
  { cyrillic: 'кх', armenian: 'ք', latin: 'kh' },
  { cyrillic: 'ев', armenian: 'և', latin: 'ev' },
  { cyrillic: 'о', latin: 'wo', armenian: 'ո', option: '(В)о' },
];

export const doubleChars = [
  { cyrillic: 'тш', armenian: 'ճ' },
  { cyrillic: 'дж', armenian: 'շ' },
  { cyrillic: 'пх', armenian: 'փ' },
  { cyrillic: 'кх', armenian: 'ք' },
  { cyrillic: 'ев', armenian: 'և' },
  { cyrillic: 'сc', latin: 'th', armenian: 'թ' },
  { cyrillic: 'тс', armenian: 'ծ' },
  { cyrillic: 'дз', latin: 'th', armenian: 'ձ' },
  { cyrillic: ' во', latin: 'wo', armenian: ' ո' },
];


export default chars;
