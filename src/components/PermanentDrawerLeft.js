import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import "./PermanentDrawerLeft.css";

export function PermanentDrawerLeft() {
    return (
      <List className='leftDrawer'>
        {['Alexandria Ocasio-Cortez', 'Trevor Noah', 'Oprah Winfrey', 'Steve Jobs', 'Jacinda Ardern', 'Olaf Scholz', 'Margaret Thatcher', 'Barack Obama', 'Mel Robbins', 'Malala Yousafzai'].map((text, index) => (
          <ListItem key={TextDecoder} >
            <ListItemButton className='eachButton'>
              <ListItemAvatar>
                <Avatar
                //add the photos too LMAO
                  src={`./headshots/Barack_Obama.jpg`}
                />
              </ListItemAvatar>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }