import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Card, CardHeader, CardContent, Typography } from '@mui/material';

const NoteCard = ({ id, name, description, save, willspend }: any) => {
  return (
  <Box
    sx={{
        width: 300,
    }}
  >
    <Link href={`/notes/${id}`} passHref>
      <Card sx={{
        boxShadow: '0px 0px 2px 0 rgb(0 0 0 / 50%)'
      }}>
        <CardHeader title={ name }/>
        <CardContent>
          <Typography>
            { description }
          </Typography> 
        </CardContent>
      </Card>
    </Link>
  </Box>);
}

export default NoteCard;