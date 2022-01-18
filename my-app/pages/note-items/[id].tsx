import { ParsedUrlQuery } from 'querystring';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { getById } from '../../src/apis/note-items';

const NoteItems: NextPage = () => {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const { id } = params as ParsedUrlQuery;

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

export default NoteItems;