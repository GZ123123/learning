import { NextPage } from 'next';
import { useNotes } from '../../src/hooks/notes';

const Notes: NextPage = () => {
  const _test = useNotes()
  console.log(_test);
  return <></>
}

export default Notes;