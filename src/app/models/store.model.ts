import { Fish } from './fish.model';

export interface Store {
  fishes: Fish[];
  userId: String;
}
