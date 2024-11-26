//& GESTION USUARIO EXAMEN


import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import { useSelector } from 'react-redux'; // Para acceder al estado de Redux
import { useNavigate } from 'react-router-dom'; // Para redirigir a login si no están logueados
import Menu from '../components/Menu'; // Asumiendo que tienes un componente de menú

// Definir la interfaz UserType
interface UserType {
  id: number;
  nombre: string;
  login: string;
  password: string;
  rol: string;
}

const ManageUsers: React.FC = () => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    nombre: '',
    login: '',
    password: '',
    rol: '',
  });
  const [error, setError] = useState<string>('');
  const [usersList, setUsersList] = useState<UserType[]>([]);

  // Obtener el estado de autenticación (si el usuario está logueado o no)
  const userRole = useSelector((state: any) => state.authenticator?.rol);
  const navigate = useNavigate();

  // Verificar si el usuario está logueado
  useEffect(() => {
    if (!userRole) {
      navigate('/'); // Si no hay rol, redirigir al login
    }
    fetchUsers(); // Obtener los usuarios al cargar el componente
  }, [userRole, navigate]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Validar el formulario antes de enviarlo
  const validateForm = (): boolean => {
    if (!user.nombre || !user.login || !user.password || !user.rol) {
      setError('Por favor, completa todos los campos correctamente.');
      return false;
    }
    // Validación de la contraseña (por ejemplo, mínimo 6 caracteres)
    if (user.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    setError('');
    return true;
  };

  // Obtener los usuarios desde la base de datos
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3030/getUsers');
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await response.json();
      setUsersList(data.data || []); // Asumiendo que la respuesta contiene un objeto con la propiedad 'data'
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Hubo un problema al cargar los usuarios.');
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:3030/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: user.nombre,
          login: user.login,
          password: user.password,
          rol: user.rol,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al insertar el usuario');
      }

      alert('Usuario insertado correctamente');
      setUser({ id: 0, nombre: '', login: '', password: '', rol: '' }); // Limpiar los campos
      fetchUsers(); // Actualizar la lista de usuarios
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error al insertar el usuario');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Menú de navegación */}
      <Menu />

      {/* Cuerpo principal */}
      <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Gestión de Usuarios
          </Typography>

          {/* Mostrar el error si lo hay */}
          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          {/* Formulario */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, backgroundColor: '#fff', padding: 3, borderRadius: 2, boxShadow: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  name="nombre"
                  value={user.nombre}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Login"
                  variant="outlined"
                  fullWidth
                  name="login"
                  value={user.login}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Rol"
                  variant="outlined"
                  fullWidth
                  name="rol"
                  value={user.rol}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>
              Insertar Usuario
            </Button>
          </Box>

          {/* Tabla con los usuarios */}
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
            Usuarios Registrados:
          </Typography>

          <Paper sx={{ padding: 2, boxShadow: 2 }}>
            <TableContainer>
              <Table aria-label="Users Table">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Nombre</strong></TableCell>
                    <TableCell><strong>Login</strong></TableCell>
                    <TableCell><strong>Rol</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersList.length > 0 ? (
                    usersList.map((user: UserType) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.nombre}</TableCell>
                        <TableCell>{user.login}</TableCell>
                        <TableCell>{user.rol}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        No hay usuarios registrados.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ManageUsers;
