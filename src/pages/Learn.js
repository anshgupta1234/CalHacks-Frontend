import React from 'react';

import { createTheme } from '@mui/material/styles';
import { DenseAppBar } from '../components/DenseAppBar';
import { PermanentDrawerLeft } from '../components/PermanentDrawerLeft';


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

const Learn = () => {
  return (
    <div>
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <DenseAppBar></DenseAppBar>
    </div>
  );
};

export default Learn;