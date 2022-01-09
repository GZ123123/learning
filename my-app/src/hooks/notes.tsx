import type { INotes, INote } from "../interfaces";

import useCreateSWR from '../utils/swr';

import { getAll, getById } from "../apis/notes";

const useNotes = () => useCreateSWR<INotes>(['notes'], () => getAll());

const useNoteById = (id: string) => useCreateSWR<INote>(['note', id], () => getById());

export {
  useNotes,
  useNoteById
}
