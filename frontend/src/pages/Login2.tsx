/*import { Typography, Container, Button, Paper, Box, TextField, IconButton } from '@mui/material';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';         // Importamos useDispatch
import { authActions } from '../store/authSlice';  // Importamos las acciones de authSlice

function Login2() {
  const [data, setData] = useState({ usuario: '', contraseña: '', corresponden: 0 });
  const bduser = 'Toruh';
  const bdpasswd = 'Toruh';
  const navigate = useNavigate();
  const dispatch = useDispatch();  // Creamos una instancia de useDispatch

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.usuario === bduser && data.contraseña === bdpasswd) {
      setData({ ...data, corresponden: 1 });
      console.log("Usuario: " + data.usuario + ", Contraseña: " + data.contraseña);
      
      // Dispatch para actualizar el estado de autenticación
      dispatch(authActions.login({
        name: data.usuario,   // Asigna el nombre de usuario del formulario
        role: 'administrador' // Establece el rol; aquí puedes cambiarlo según tu lógica
      }));

      navigate("/Home");  // Navega a la página de inicio
    } else {
      setData({ ...data, corresponden: 2 });
      console.log("Usuario: " + data.usuario + ", Contraseña: " + data.contraseña);
    }
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, usuario: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, contraseña: e.target.value });
  };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Paper elevation={3} square={true} sx={{ textAlign: 'center', padding: "7px" }}>
        <Typography variant='h5' color="primary">Sistema de acceso</Typography>
        <IconButton color="primary">
          <LockIcon />
        </IconButton>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Usuario"
                variant='outlined'
                fullWidth
                value={data.usuario}
                onChange={handleChangeUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Contraseña"
                variant='outlined'
                fullWidth
                value={data.contraseña}
                type='password'
                onChange={handleChangePassword}
              />
            </Grid>
          </Grid>
          <Button 
            sx={{ padding: "10px", marginTop: "10px" }} 
            variant='contained' 
            fullWidth 
            type='submit'
            color="primary"
          >
            Acceder
          </Button>
          {data.corresponden !== 0 && (
            data.corresponden === 1 ? (
              <Alert severity="success">Acceso concedido</Alert>
            ) : (
              <Alert severity="error">Usuario y/o contraseña incorrecta</Alert>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login2;*/

//&codigo con la modificacion de comprobacion con endpoint?

/*import { Typography, Container, Button, Paper, Box, TextField, IconButton, Grid, Alert } from '@mui/material';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
/*
function Login2() {
  const [data, setData] = useState({ usuario: '', contraseña: '', corresponden: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:3030/login?user=${data.usuario}&password=${data.contraseña}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('Lo que nos llega de la base de datos: ', response.data);
        
        if (response.data?.length !== 0) {
          dispatch(
            authActions.login({
              nombreUsuario: data.usuario,
              rol: 'administrador', // Cambia este valor si el rol viene desde el backend
            })
          );
          setData({ ...data, corresponden: 1 });
          navigate('/Home');
        } else {
          console.log('Usuario/contraseña son incorrectos');
          setData({ ...data, corresponden: 2 });
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud de login: ', error);
        setData({ ...data, corresponden: 2 });
      });
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, usuario: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, contraseña: e.target.value });
  };

  return (
    <Container sx={{ marginTop: '30px' }}>
      <Paper elevation={3} square sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h5" color="primary">
          Sistema de acceso
        </Typography>
        <IconButton color="primary">
          <LockIcon />
        </IconButton>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Usuario"
                variant="outlined"
                fullWidth
                value={data.usuario}
                onChange={handleChangeUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Contraseña"
                variant="outlined"
                fullWidth
                value={data.contraseña}
                type="password"
                onChange={handleChangePassword}
              />
            </Grid>
          </Grid>
          <Button sx={{ padding: '10px', marginTop: '10px' }} variant="contained" fullWidth type="submit" color="primary">
            Acceder
          </Button>
          {data.corresponden !== 0 && (
            data.corresponden === 1 ? (
              <Alert severity="success">Acceso concedido</Alert>
            ) : (
              <Alert severity="error">Usuario y/o contraseña incorrecta</Alert>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login2;*/

//&verificacion de roles

/*
import { Typography, Container, Button, Paper, Box, TextField, IconButton, Grid, Alert } from '@mui/material';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

function Login2() {
  const [data, setData] = useState({ usuario: '', contraseña: '', corresponden: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:3030/login?user=${data.usuario}&password=${data.contraseña}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('Lo que nos llega de la base de datos: ', response.data);
        
        if (response.data?.length !== 0) {
          dispatch(
            authActions.login({
              nombreUsuario: data.usuario,
              rol: response.data?.rol,  // Tomamos el rol que llega del backend
            })
          );
          setData({ ...data, corresponden: 1 });
          navigate('/Home');
        } else {
          console.log('Usuario/contraseña son incorrectos');
          setData({ ...data, corresponden: 2 });
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud de login: ', error);
        setData({ ...data, corresponden: 2 });
      });
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, usuario: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, contraseña: e.target.value });
  };

  return (
    <Container sx={{ marginTop: '30px' }}>
      <Paper elevation={3} square sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h5" color="primary">
          Sistema de acceso
        </Typography>
        <IconButton color="primary">
          <LockIcon />
        </IconButton>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Usuario"
                variant="outlined"
                fullWidth
                value={data.usuario}
                onChange={handleChangeUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Contraseña"
                variant="outlined"
                fullWidth
                value={data.contraseña}
                type="password"
                onChange={handleChangePassword}
              />
            </Grid>
          </Grid>
          <Button sx={{ padding: '10px', marginTop: '10px' }} variant="contained" fullWidth type="submit" color="primary">
            Acceder
          </Button>
          {data.corresponden !== 0 && (
            data.corresponden === 1 ? (
              <Alert severity="success">Acceso concedido</Alert>
            ) : (
              <Alert severity="error">Usuario y/o contraseña incorrecta</Alert>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login2;*/


//& LOGIN2 CON TOOLTIP


import { Typography, Container, Button, Paper, Box, TextField, IconButton, Grid, Alert, Tooltip } from '@mui/material';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

function Login2() {
  const [data, setData] = useState({ usuario: '', contraseña: '', corresponden: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:3030/login?user=${data.usuario}&password=${data.contraseña}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.data?.length !== 0) {
          dispatch(
            authActions.login({
              nombreUsuario: data.usuario,
              rol: response.data?.rol,
            })
          );
          setData({ ...data, corresponden: 1 });
          navigate('/Home');
        } else {
          setData({ ...data, corresponden: 2 });
        }
      })
      .catch(() => {
        setData({ ...data, corresponden: 2 });
      });
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, usuario: e.target.value });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, contraseña: e.target.value });
  };

  return (
    <Container sx={{ marginTop: '30px' }}>
      <Paper elevation={3} square sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant="h5" color="primary">Sistema de acceso</Typography>
        <Tooltip title="Este es el ícono de bloqueo" arrow placement="top">
          <IconButton color="primary">
            <LockIcon />
          </IconButton>
        </Tooltip>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Tooltip title="Introduce tu usuario" arrow placement="right">
                <TextField
                  required
                  label="Usuario"
                  variant="outlined"
                  fullWidth
                  value={data.usuario}
                  onChange={handleChangeUser}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <Tooltip title="Introduce tu contraseña" arrow placement="right">
                <TextField
                  required
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  value={data.contraseña}
                  type="password"
                  onChange={handleChangePassword}
                />
              </Tooltip>
            </Grid>
          </Grid>
          <Tooltip title="Haz clic aquí para acceder" arrow placement="bottom">
            <Button
              sx={{ padding: '10px', marginTop: '10px' }}
              variant="contained"
              fullWidth
              type="submit"
              color="primary"
            >
              Acceder
            </Button>
          </Tooltip>
          {data.corresponden !== 0 && (
            data.corresponden === 1 ? (
              <Alert severity="success">Acceso concedido</Alert>
            ) : (
              <Alert severity="error">Usuario y/o contraseña incorrecta</Alert>
            )
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login2;
