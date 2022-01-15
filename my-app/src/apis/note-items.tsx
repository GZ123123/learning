import { INoteItem } from "../interfaces";

async function getById(id: string): Promise<INoteItem | undefined> {
  return {
    id: id,
    money: 1,
    images: []
  };
}

async function create(data: any): Promise<INoteItem | undefined> {
  return;
}

async function update(id: string, data: any): Promise<INoteItem | undefined> {
  return;
}

async function remove(data: any): Promise<boolean> {
  return false;
}

export {
  getById,
  create,
  update,
  remove
}