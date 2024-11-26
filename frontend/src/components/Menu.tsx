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
  









  //&menu con crud

 {/*} import React, { useState } from 'react';
  import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import SummarizeIcon from '@mui/icons-material/Summarize';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import LogoutIcon from '@mui/icons-material/Logout';
  import HelpIcon from '@mui/icons-material/Help'; // Icono de ayuda
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
    {/*         <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
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
    {/*         <Link to="/reports" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Informes" />
              </ListItemButton>
            </ListItem>
          </Link>
  
          {/* Botón de Ayuda, debajo de Informes */}
      {/*       <Link to="/reports" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Ayuda" />
              </ListItemButton>
            </ListItem>
          </Link>
  
          {/* Botón para cerrar sesión */}
    {/*      <ListItem disablePadding onClick={handleLogout}>
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
     {/*        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            
            {/* Drawer (Menú desplegable) */}
     {/*        <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
  
            {/* Nombre del usuario logueado */}
     {/*        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {nombreUsuario || 'Usuario'}
            </Typography>
            
            {/* Icono del rol del usuario */}
      {/*       <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  
  export default Menu; */}
  










  

  //&menu con roles
  import React, { useState } from 'react';
  import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import SummarizeIcon from '@mui/icons-material/Summarize';
  import HelpIcon from '@mui/icons-material/Help';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Icono de Admin
  import LogoutIcon from '@mui/icons-material/Logout';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { authActions } from '../store/authSlice';
  
  interface MenuProps {
    nombreUsuario?: string;  // Usaremos este prop solo si no obtenemos el nombre desde el store de Redux
  }
  
  const Menu: React.FC<MenuProps> = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    // Obtener datos del usuario desde Redux (nombre y rol)
    const userData = useSelector((state: any) => state.authenticator);
    const nombreUsuario = userData?.nombreUsuario || 'Usuario';  // Si no hay nombre, mostramos 'Usuario'
    const userRole = userData?.rol;  // Obtener el rol del usuario (admin o user)
  
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
  
          {/* Link a la página Reports: Visible solo para admins */}
          {userRole === 'admin' && (
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
          )}
  
          {/* Link a la página Ayuda: Visible para todos */}
          <Link to="/Help" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Ayuda" />
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
              {nombreUsuario}
            </Typography>
            {/* Renderizar icono condicionalmente según el rol */}
            <IconButton color="inherit">
              {userRole === 'admin' ? <AdminPanelSettingsIcon /> : <AccountCircle />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  
  export default Menu;
  