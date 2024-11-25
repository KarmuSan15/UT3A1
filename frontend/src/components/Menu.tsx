  /*import React, { useState, useEffect } from 'react';
  import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import SummarizeIcon from '@mui/icons-material/Summarize';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import LogoutIcon from '@mui/icons-material/Logout';
  import { Link, useNavigate } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import { authActions } from '../store/authSlice';

  const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.auth); // Cambia 'state.auth' si tu slice tiene otro nombre
    const isAuthenticated = userData.Autenticado;

    // Redirigir al login si el usuario no está autenticado
    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/');
      }
    }, [isAuthenticated, navigate]);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    const handleLogout = () => {
      dispatch(authActions.logout());
      navigate('/');
    };

    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          //{ Link a la página Home }
          <Link to="/Casa" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
          </Link>
          //{Link a la página Reports }
          <Link to="/Reporte" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Informes" />
              </ListItemButton>
            </ListItem>
          </Link>
         // { Botón para cerrar sesión }
          <ListItem disablePadding onClick={handleLogout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          //  { Botón hamburguesa para abrir el Drawer }
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          //  {Drawer (Menú desplegable) }
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
           // { Nombre del usuario logueado }
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {userData.nombreUsuario || 'Usuario'}
            </Typography>
          //  { Icono del rol del usuario }
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  export default Menu;*/
  
  import React, { useState } from 'react';
  import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import SummarizeIcon from '@mui/icons-material/Summarize';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import LogoutIcon from '@mui/icons-material/Logout';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { authActions } from '../store/authSlice';
  
  interface MenuProps {
    nombreUsuario?: string;  // Recibimos nombreUsuario como prop
  }
  
  const Menu: React.FC<MenuProps> = ({ nombreUsuario }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
  
    const handleLogout = () => {
      dispatch(authActions.logout());
      navigate('/');
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {/* Link a la página Home */}
          <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* Link a la página Reports */}
          <Link to="/reports" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Informes" />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* Botón para cerrar sesión */}
          <ListItem disablePadding onClick={handleLogout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* Botón hamburguesa para abrir el Drawer */}
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {/* Drawer (Menú desplegable) */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            {/* Nombre del usuario logueado */}
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {nombreUsuario || 'Usuario'}
            </Typography>
            {/* Icono del rol del usuario */}
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  
  export default Menu;
  
  