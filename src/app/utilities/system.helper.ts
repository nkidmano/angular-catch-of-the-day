export class SystemHelper {
  public static storeId: string;
  public static userId: string;

  public static rando(arr: any) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public static slugify(text: string) {
    return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
  }

  public static getFunName() {
    const adjectives = [
      'adorable',
      'beautiful',
      'clean',
      'drab',
      'elegant',
      'fancy',
      'glamorous',
      'handsome',
      'long',
      'magnificent',
      'old-fashioned',
      'plain',
      'quaint',
      'sparkling',
      'ugliest',
      'unsightly',
      'angry',
      'bewildered',
      'clumsy',
      'defeated',
      'embarrassed',
      'fierce',
      'grumpy',
      'helpless',
      'itchy',
      'jealous',
      'lazy',
      'mysterious',
      'nervous',
      'obnoxious',
      'panicky',
      'repulsive',
      'scary',
      'thoughtless',
      'uptight',
      'worried'
    ];

    const nouns = [
      'women',
      'men',
      'children',
      'teeth',
      'feet',
      'people',
      'leaves',
      'mice',
      'geese',
      'halves',
      'knives',
      'wives',
      'lives',
      'elves',
      'loaves',
      'potatoes',
      'tomatoes',
      'cacti',
      'foci',
      'fungi',
      'nuclei',
      'syllabuses',
      'analyses',
      'diagnoses',
      'oases',
      'theses',
      'crises',
      'phenomena',
      'criteria',
      'data'
    ];

    return `${this.rando(adjectives)}-${this.rando(adjectives)}-${this.rando(nouns)}`;
  }
}
