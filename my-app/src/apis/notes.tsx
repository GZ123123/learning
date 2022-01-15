import axios from 'axios'; 

import { getAllNotes, getNoteById } from './_constants';

import { INotes, INote } from "../interfaces"

async function getAll(): Promise<Array<INotes>> {
  return await axios.get(getAllNotes).then(b => b?.data).catch(e => ({ success: false }))
}

async function getById(id: string): Promise<INote | undefined> {
  return await axios.get(`${getNoteById}/${id}`).then(b => b?.data).catch(e => ({ success: false }))
}

async function create(data: any): Promise<INote | undefined> {
  return;
}

async function update(id: string, data: any): Promise<INote | undefined> {
  return;
}

async function remove(data: any): Promise<boolean> {
  return false;
}

export {
  getAll,
  getById,
  create,
  update,
  remove
}