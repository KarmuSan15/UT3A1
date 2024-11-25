import React, { useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import Menu from '../components/Menu';

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accedemos correctamente a `isAuthenticated` desde Redux
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  // Redirigir al login si el usuario no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Aquí pasamos `nombreUsuario` como prop */}
      <Menu nombreUsuario={userData?.nombreUsuario} />  {/* Usamos el Menu como encabezado */}

      {/* Cuerpo de la página de Reportes */}
      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Card sx={{ width: '100%', maxWidth: 600, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" color="primary" gutterBottom>
              Página de Reportes de Toruh
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Aquí puedes ver los informes y generar nuevos reportes. Actualmente no hay reportes disponibles, pero puedes agregar más funcionalidades en el futuro.
            </Typography>
            {/* Botón de logout (si lo necesitas en esta página) */}
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
      </Container>
    </Box>
  );
};

export default Reports;
