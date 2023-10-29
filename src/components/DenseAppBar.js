import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
  