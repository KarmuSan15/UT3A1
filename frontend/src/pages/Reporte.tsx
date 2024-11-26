/*import React, { useEffect } from 'react';
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
      {/* Aquí pasamos `nombreUsuario` como prop *//*}
   /*   <Menu nombreUsuario={userData?.nombreUsuario} />  {/* Usamos el Menu como encabezado *//*}

      {/* Cuerpo de la página de Reportes *//*}
  /*    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Card sx={{ width: '100%', maxWidth: 600, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" color="primary" gutterBottom>
              Página de Reportes de Toruh
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Aquí puedes ver los informes y generar nuevos reportes. Actualmente no hay reportes disponibles, pero puedes agregar más funcionalidades en el futuro.
            </Typography>
            {/* Botón de logout (si lo necesitas en esta página) *//*}
     /*       <Button
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

export default Reports;*/



//&Nuevo Reporte para rol

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Paper, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';
import InformeColeccion from '../components/InformeColeccion'; // Importar el nuevo componente

const Reports: React.FC = () => {
  const navigate = useNavigate();

  // Estado para manejar si el informe ha sido generado
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [data, setData] = useState<any[]>([]); // Almacenaremos los datos obtenidos de la base de datos
  const [loading, setLoading] = useState<boolean>(false); // Para controlar el estado de carga
  const [error, setError] = useState<string>(''); // Para almacenar el error en caso de que la API falle

  // Accedemos correctamente a `isAuthenticated` desde Redux
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  // Redirigir al login si el usuario no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Función para obtener los datos de la tabla coleccion
  const fetchReportData = async () => {
    setLoading(true); // Activar el estado de carga
    setError(''); // Limpiar el error previo
    try {
      const response = await fetch('http://localhost:3030/getItems');
      const data = await response.json();
      
      if (response.ok) {
        setData(data.data); // Almacenamos los datos obtenidos
        setIsReportGenerated(true); // Indicamos que el informe ha sido generado
      } else {
        throw new Error('Error al obtener los datos del informe');
      }
    } catch (error) {
      setError('Hubo un problema al cargar los datos. Inténtalo nuevamente.');
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Aquí pasamos `nombreUsuario` como prop */}
      <Menu nombreUsuario={userData?.nombreUsuario} />

      {/* Cuerpo de la página de Reportes */}
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección. Haz clic en el botón de abajo para generar el informe de la colección.
        </Typography>

        {/* Mostrar el botón solo si no hay informe generado aún */}
        {!isReportGenerated && !loading && (
          <Button
            variant="contained"
            color="primary"
            onClick={fetchReportData}
            sx={{
              mt: 3,
              padding: '12px 24px',
              borderRadius: '20px',
              fontSize: '16px',
              width: '50%',  // Ajustamos el tamaño del botón
              alignSelf: 'center',
              boxShadow: 3,
              '&:hover': {
                backgroundColor: '#1976d2', // Color cuando el botón está en hover
              },
            }}
          >
            GENERAR INFORME COLECCIÓN
          </Button>
        )}

        {/* Mostrar un indicador de carga mientras los datos se obtienen */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Mostrar el mensaje de error si la carga falla */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* Renderizar el informe si la variable de control está en true */}
        {isReportGenerated && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            {/* Eliminamos el mensaje "Informe Generado" */}
            <InformeColeccion data={data} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;
