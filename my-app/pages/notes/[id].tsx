import Button from '@mui/material/Button';
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { AppProps } from "next/app";
import { ParsedUrlQuery } from 'querystring';

import { getById } from '../../src/apis/notes';
import { INote, INoteItems } from '../../src/interfaces';

const NoteById: any = ({ note }: AppProps & { note: INote }) => {
  return <>
    <Button href="/">Back</Button>
    <p>{note.id}</p>
    <ul>
      {
        note.items.map((item: INoteItems) => 
          <li key={item.id}><Button>{item.money}</Button></li>
        )
      }
    </ul>
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const { id } = params as ParsedUrlQuery;

  // get data
  const { success, data }: any = await getById(id as string);

  if (!success) return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props:{},
  }
  
  return {
    props: {
      note: data
    }
  }
} 

export default NoteById; 
