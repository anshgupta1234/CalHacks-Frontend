import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import "./PermanentDrawerLeft.css";
import obama from "./headshots/Barack_Obama.jpg"
import aoc from "./headshots/Alexandria Ocasio-Cortez.jpg"
import jacinda from "./headshots/Jacinda Ardern.jpg"
import malala from "./headshots/Malala Yousafzai.jpg"
import margaret from "./headshots/Margaret Thatcher.jpg"
import mel from "./headshots/Mel Robbins.jpg"
import olaf from "./headshots/Olaf Scholz.jpg"
import oprah from "./headshots/Oprah Winfrey.jpg"
import steve from "./headshots/Steve Jobs.jpg"
import trevor from "./headshots/Trevor Noah.jpg"

const imageMapping = {
  'Barack Obama': obama,
  'Trevor Noah': trevor,
  'Oprah Winfrey': oprah,
  'Steve Jobs': steve,
  'Jacinda Ardern': jacinda,
  'Olaf Scholz': olaf,
  'Margaret Thatcher': margaret,
  'Alexandria Ocasio-Cortez': aoc,
  'Mel Robbins': mel,
  'Malala Yousafzai': malala,
};

export function PermanentDrawerLeft() {
    return (
      <List className='leftDrawer'>
        {['Barack Obama', 'Trevor Noah', 'Oprah Winfrey', 'Steve Jobs', 'Jacinda Ardern', 'Olaf Scholz', 'Margaret Thatcher', 'Alexandria Ocasio-Cortez', 'Mel Robbins', 'Malala Yousafzai'].map((text, index) => (
          <ListItem key={TextDecoder} >
            <ListItemButton className='eachButton'>
              <ListItemAvatar>
                <Avatar
                //add the photos too LMAO
                  src={imageMapping[text]}
                />
              </ListItemAvatar>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }