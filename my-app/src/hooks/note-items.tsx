import type { INoteItem } from "../interfaces";

import useCreateSWR from '../utils/swr';

const useNoteById = (id: string) => useCreateSWR<INoteItem>(['note-item', id], () => { });

export {
  useNoteById
}
