
/*
import { Typography, Container, Button, Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { authActions } from '../store/authSlice';

function Home() {
  // Accedemos a los datos del usuario desde el estado de Redux
  const userData = useSelector((state: RootState) => state.authenticator);

  // Imprimimos en la consola el rol del usuario
  console.log('Rol del usuario:', userData.userRole);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '20px', 
          width: '100%', 
          maxWidth: '600px', 
          textAlign: 'center',
          backgroundColor: 'background.default', // Usamos el color de fondo del tema
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Bienvenido, {userData.userName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Rol: {userData.userRole}
          </Typography>
        </Box>
        <Typography variant="h5" color="secondary" gutterBottom>
          Página Home de Toruh
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ mt: 2 }}
        >
          Salir
        </Button>
      </Paper>
    </Container>
  );
}

export default Home;
*/


//&codigo con la modificacion de comprobacion login2

/*import React, { useEffect } from 'react';
//import { Typography, Container, Button, Card, CardContent } from '@mui/material'; // Importamos Box correctamente
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
//import { useSelector,/*useDispatch*//* } from 'react-redux';
//import { authActions } from '../store/authSlice';
import Dashboard from '../components/Dashboard'; 
import Menu from '../components/Menu'; // Importamos el menú como encabezado

const Home: React.FC = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  // Accedemos correctamente a `isAuthenticated` desde Redux
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  // Redirigir al login si el usuario no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  {/*const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };*//*}

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Aquí pasamos `nombreUsuario` como prop *//*}
      <Menu nombreUsuario={userData?.nombreUsuario} />  {/* Usamos el Menu como encabezado *//*}

      {/* Cuerpo de la página *//*}
     {/* <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Card sx={{ width: '100%', maxWidth: 600, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Bienvenido, {userData?.nombreUsuario || 'Usuario'}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Rol: {userData?.rol || 'N/A'}
              </Typography>
            </Box>
            <Typography variant="h5" color="secondary" gutterBottom>
              Página Home de {userData?.nombreUsuario || 'Usuario'}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              sx={{
                mt: 2,
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '16px',
                width: '100%',
              }}
            >
              Salir
            </Button>
          </CardContent>
        </Card>
      </Container>*//*}

      {/* Renderiza el componente Dashboard debajo del card *//*}
    /*  <Dashboard /> {/* Este es el componente Dashboard con el formulario y la tabla *//*}
   /* </Box>
  );
};

export default Home;*/



//&home de verificacion de roll

import React, { useEffect } from 'react';
//import { Typography, Container, Card, CardContent } from '@mui/material'; // Importamos Box correctamente
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSelector, /*useDispatch*/ } from 'react-redux';
//import { authActions } from '../store/authSlice';
import Dashboard from '../components/Dashboard'; 
import Menu from '../components/Menu'; // Importamos el menú como encabezado

const Home: React.FC = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  // Accedemos correctamente a isAuthenticated desde Redux
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  // Redirigir al login si el usuario no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Comentar este código para evitar el warning si no se usa
  /*
  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };
  */

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Aquí pasamos nombreUsuario como prop */}
      <Menu nombreUsuario={userData?.nombreUsuario} />  {/* Usamos el Menu como encabezado */}

      {/* Renderiza el componente Dashboard directamente */}
      <Dashboard /> {/* Este es el componente Dashboard con el formulario y la tabla */}
    </Box>
  );
};

export default Home;
