import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Grid } from '@mui/material';


<Grid id="body" >
    <Grid id="side-tab">
        <div id="plus"></div>
        <div id="btm-nav">
            <li id="li1">
                <IconButton id="todohome" aria-label="home">
                    <HomeIcon sx={{ color: '#8E77B5', fontSize: '70px' }} />
                </IconButton>
            </li>
            <li id="li2">
                <IconButton id="completed" aria-label="completed">
                    <CheckBoxIcon sx={{ color: '#F5F5F5', fontSize: '70px' }} />
                </IconButton>
            </li>
            <li id="li3">
                <IconButton id="addtodo" aria-label="add">
                    <AddCircleIcon sx={{ color: '#BCA3E7', fontSize: '70px' }} />
                </IconButton>
            </li>
        </div>
    </Grid> */
</Grid >

// const drawerWidth = 240;

// </Grid>const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' }) < {
//     open?: boolean;
// }>(({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{ mr: 2, ...(open && { display: 'none' }) }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         RemindMe
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     '& .MuiDrawer-paper': {
//                         width: drawerWidth,
//                         boxSizing: 'border-box',
//                     },
//                 }}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//             >
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                     <List>
//                         {['To-do List', 'Completed Task', 'Add New Task'].map((text, index) => (
//                             <ListItem key={text} disablePadding>
//                                 <ListItemButton>
//                                     <ListItemIcon>
//                                         {index === 0 ? <HomeIcon /> : index === 1 ? <CheckBoxIcon /> : <AddCircleIcon />}
//                                     </ListItemIcon>
//                                     <ListItemText primary={text} />
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List>
//             </Drawer>
//         </Box>
//     );
// } 