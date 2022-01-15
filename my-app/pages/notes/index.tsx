import { NextPage } from 'next';

import Grid from '@mui/material/Grid';

import { getAll } from '../../src/apis/notes';
import { INotes } from '../../src/interfaces';
import { NoteCard } from '../../src/components';

const Notes: NextPage = ({ notes }: any) => {
  return <Grid container spacing={4} sx={{marginTop: 0}}>
    {notes.map((note: INotes) => (
      <Grid key={note.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
        <NoteCard {...note} />
      </Grid>
    ))}
  </Grid>
}

export async function getServerSideProps(context: any) {
  // get All Notes
  const { success, data }: any = await getAll();

  return {
    props: { notes: data }
  }
}

export default Notes;