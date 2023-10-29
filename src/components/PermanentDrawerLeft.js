import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const drawerWidth = 300;

export function PermanentDrawerLeft() {
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