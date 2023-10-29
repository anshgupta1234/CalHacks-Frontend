import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const drawerWidth = 300;

function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        
        <List>
          {['Alexandria Ocasio-Cortez', 'Trevor Noah', 'Oprah Winfrey', 'Steve Jobs', 'Jacinda Ardern', 'Olaf Scholz', 'Margaret Thatcher', 'Barack Obama', 'Mel Robbins', 'Malala Yousafzai'].map((text, index) => (
            <ListItem key={TextDecoder} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                  //add the photos too LMAO
                    alt={`Avatar n°${index}`}
                    src={`./headshots/${TextDecoder}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}

function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: theme.zIndex.drawer + 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar variant="dense" align='center'>
          <Typography variant="h3" color="inherit" component="div" mt={2} mb={2} >
            Loqui
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const App = () => {
  return (
    <div>
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <DenseAppBar align='center'></DenseAppBar>
      
    </div>
  );
};

export default App;