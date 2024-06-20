import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/HomeTwoTone';
import Calendar from '@mui/icons-material/CalendarTodayTwoTone';
import Gallery from '@mui/icons-material/CollectionsTwoTone';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen width is less than or equal to 600px
  const [value, setValue] = useState(0);

  // If not mobile, return null (don't render)
  if (!isMobile) {
    return null;
  }

  return (
    <div>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:999 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} component={Link}
            to="/"/>
          <BottomNavigationAction label="Events" icon={<Calendar />} component={Link} to="/events"/>
          <BottomNavigationAction label="Gallery" icon={<Gallery />} component={Link} to="/gallery"/>
        </BottomNavigation>
      </Paper>
    </div>
  )
}
