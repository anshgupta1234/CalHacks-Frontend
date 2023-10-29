import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function DenseAppBar() {
    return (
        <AppBar>
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                variant="dense"
            >
            <Typography variant="h3" color="inherit" component="div" mt={2} mb={2} >
                Loqui
            </Typography>
            </Toolbar>
        </AppBar>
    );
}
  