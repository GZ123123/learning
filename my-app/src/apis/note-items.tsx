import { INoteItem } from "../interfaces";

function getById(): INoteItem | undefined {
  return {
    id: '1',
    money: 1,
    images: []
  };
}

export {
  getById
}