import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { ILayoutProps } from '../../../interfaces';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = ({ children }: ILayoutProps) => {
    return (<Box sx={{ display: 'flex' }}>
    <Header />
    <Sidebar />
    <Box component="main" sx={{width: '100%'}}>
      <Toolbar />
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  </Box>)
}

export default MainLayout;