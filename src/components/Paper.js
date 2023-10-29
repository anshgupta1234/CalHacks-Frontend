import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const CustomPaper = styled(Paper)(({ theme, customWidth, customHeight }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  width: customWidth || 'auto',
  height: customHeight || 'auto',
}));

export default function DynamicSizedPaper({ customWidth, customHeight, text }){
  return (
    <CustomPaper variant="elevation" customWidth={customWidth} customHeight={customHeight}>
      <Typography variant="h5">{text}</Typography>
    </CustomPaper>
  );
};
