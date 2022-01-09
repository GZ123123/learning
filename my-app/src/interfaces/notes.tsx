import { INoteItems } from ".";

export interface INotes {
  id: string;
  name: string;
}

export interface INote {
  id: string;
  name: string;

  items: Array<INoteItems>;
}