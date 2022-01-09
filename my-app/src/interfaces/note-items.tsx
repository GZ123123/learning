import type { INoteImages } from ".";

export interface INoteItems {
  id: string;
  money: number;
}

export interface INoteItem {
  id: string;
  money: number;

  images: Array<INoteImages>
}