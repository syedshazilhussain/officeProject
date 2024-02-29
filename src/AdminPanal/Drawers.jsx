import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Inbox from './Inbox';
import { useNavigate } from 'react-router-dom';
import { IconButton, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import logo from "../img/Oprify final-04.png"
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
    const theme = useTheme();
    const [menuData, setMenuData] = useState(true);
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, height: 99 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        // onClick={handleDrawerOpen}
                        onClick={() => setMenuData(!menuData)}
                        edge="start"
                        sx={{
                            marginRight: 3,
                            ...(menuData && { display: 'none' }),
                        }}
                    >
                        {/* <MenuIcon /> */}
                        {/* <h1>T</h1> */}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ marginTop: 3, fontSize: 33, }}>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                onClick={() => setMenuData(!menuData)}
                variant="permanent"
                anchor="left"
            >
                <DrawerHeader style={{display: 'flex', justifyContent: "center", padding: 10}}>
                    <IconButton sx={{display: 'flex', justifyContent: "center", gap: -1, marginTop: 2}}>
                        {/* {theme.direction === 'rtl' ? <h1>g</h1> : <h1>hh</h1>} */}
                        <img src={logo} height={60} alt="" />
                        <h6 >Operify</h6>
                    </IconButton>
                </DrawerHeader>
                {/* <Toolbar /> */}
                <Divider />
                <List>
                    <ListItem disablePadding onClick={() => { navigate("/inbox") }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <h1>hello</h1> : <h1>bye</h1>} */}
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => { navigate("/about") }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <h1>hello</h1> : <h1>bye</h1>} */}
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => {navigate("/login")}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <h1>hello</h1> : <h1>bye</h1>} */}
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {/* {
                    menuData == "Inbox" && <Inbox />
                } */}
            </Box>
        </Box>
    );
}