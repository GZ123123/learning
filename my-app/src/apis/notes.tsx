import { INotes, INote } from "../interfaces"

function getAll(): Array<INotes> {
  return []
}

function getById(): INote | undefined {
  return {
    id: '1',
    name: '1',

    items: []
  }
}

export {
  getAll,
  getById
}