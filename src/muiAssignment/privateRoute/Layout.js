import React from 'react';
import {Box, Typography, Container, Button, AppBar, Toolbar, IconButton, Menu, Avatar, Tooltip, MenuItem, createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const pages = [{'title': 'Home', 'link': '/'}, {'title': 'Album', 'link': '/albums'}, {'title': 'Contact', 'link': '/contact'}];

const theme = createTheme();

export default function Layout({ children }) {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
  
const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};

const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

const navigate = useNavigate()

const onLogout = () => {
    localStorage.clear()
    navigate('/login')
}

const onShowAlert = (message) => {
    alert(message)
}
return (
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, index) => (
                    <Link key={index} to={page.link} style={{textDecoration: 'none'}}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                        >
                            
                            {page.title}
                        </Button>
                    </Link>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography onClick={() => onLogout()} textAlign="center">Logout</Typography>
                    </MenuItem>
                    
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>

        {/* {React.cloneElement(children, { onShowAlert })} */}
        {React.cloneElement(children, {Alert :onShowAlert})}

        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            copyright@2022
            </Typography>
        </Box>
        {/* End footer */}
    </ThemeProvider>
    );
}