import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
    label: string;
}

export default function Header({ label }: HeaderProps) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {label}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
