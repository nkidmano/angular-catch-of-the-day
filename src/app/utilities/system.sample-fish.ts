import { Fish } from '../models/fish.model';
import { FISH_STATUS } from './system.constants';

export const FISHES: Fish[] = [
  {
    id: 'fish1',
    name: 'Pacific Halibut',
    image: 'assets/images/hali.jpg',
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    price: 1724,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish2',
    name: 'Lobster',
    image: 'assets/images/lobster.jpg',
    desc:
      'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
    price: 3200,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish3',
    name: 'Sea Scallops',
    image: 'assets/images/scallops.jpg',
    desc:
      'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
    price: 1684,
    status: FISH_STATUS.UNVAILABLE
  },
  {
    id: 'fish4',
    name: 'Mahi Mahi',
    image: 'assets/images/mahi.jpg',
    desc:
      'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
    price: 1129,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish5',
    name: 'King Crab',
    image: 'assets/images/crab.jpg',
    desc:
      'Crack these open and enjoy them plain or with one of our cocktail sauces',
    price: 4234,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish6',
    name: 'Atlantic Salmon',
    image: 'assets/images/salmon.jpg',
    desc:
      'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
    price: 1453,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish7',
    name: 'Oysters',
    image: 'assets/images/oysters.jpg',
    desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
    price: 2543,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish8',
    name: 'Mussels',
    image: 'assets/images/mussels.jpg',
    desc:
      'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
    price: 425,
    status: FISH_STATUS.AVAILABLE
  },
  {
    id: 'fish9',
    name: 'Jumbo Prawns',
    image: 'assets/images/prawns.jpg',
    desc:
      'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
    price: 2250,
    status: FISH_STATUS.AVAILABLE
  },
];
