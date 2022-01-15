import { useContext } from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

import { AppContext } from '../../../contexts/AppContext';

const CDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? 240 : 72,
  flexShrink: 0,
  overflow: 'none',
  '& .MuiDrawer-paper': {
    width: open ? 240 : 72,
    boxSizing: 'border-box',
    transform: 'unset !important',
    visibility: 'visible !important',
  },
}))

const Sidebar = () => {
  const { isSidebarOpen } = useContext(AppContext);
  return (
    <CDrawer
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
    >
      <Toolbar />
      <Box sx={{ overflowY: 'auto' }}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </CDrawer>
  )
}

export default Sidebar;