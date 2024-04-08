import {Character} from "./character";

export interface Paginator {
  info: Info[];
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
