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

/*
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
      {/* Aquí pasamos `nombreUsuario` como prop *//*}
      <Menu nombreUsuario={userData?.nombreUsuario} />

      {/* Cuerpo de la página de Reportes *//*}
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección. Haz clic en el botón de abajo para generar el informe de la colección.
        </Typography>

        {/* Mostrar el botón solo si no hay informe generado aún *//*}
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

        {/* Mostrar un indicador de carga mientras los datos se obtienen *//*}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Mostrar el mensaje de error si la carga falla *//*}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* Renderizar el informe si la variable de control está en true *//*}
        {isReportGenerated && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            {/* Eliminamos el mensaje "Informe Generado" *//*}
            <InformeColeccion data={data} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;*/

//& REPORTE TOOLTIP
/*
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Paper, CircularProgress, Alert, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';
import InformeColeccion from '../components/InformeColeccion';

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const fetchReportData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3030/getItems');
      const data = await response.json();

      if (response.ok) {
        setData(data.data);
        setIsReportGenerated(true);
      } else {
        throw new Error('Error al obtener los datos del informe');
      }
    } catch {
      setError('Hubo un problema al cargar los datos. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu nombreUsuario={userData?.nombreUsuario} />

      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección. Haz clic en el botón de abajo para generar el informe de la colección.
        </Typography>

        {!isReportGenerated && !loading && (
          <Tooltip title="Haz clic para generar el informe de la colección" arrow placement="top">
            <Button
              variant="contained"
              color="primary"
              onClick={fetchReportData}
              sx={{
                mt: 3,
                padding: '12px 24px',
                borderRadius: '20px',
                fontSize: '16px',
                width: '50%',
                alignSelf: 'center',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              GENERAR INFORME COLECCIÓN
            </Button>
          </Tooltip>
        )}

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {isReportGenerated && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <InformeColeccion data={data} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;*/

//& REPORTE EXAMEN UT3
/*
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Paper, CircularProgress, Alert, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import InformeUsuarios from "../components/informeUsuarios"; // Asegúrate de que el nombre del archivo coincida
import InformeColeccion from "../components/InformeColeccion"; // Importa el componente de la colección

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [data, setData] = useState<any[]>([]); // Datos de la colección
  const [userData, setUserData] = useState<any[]>([]); // Datos de los usuarios
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isUserReportVisible, setIsUserReportVisible] = useState(false); // Estado para controlar la visibilidad del informe de usuarios
  const [isCollectionReportVisible, setIsCollectionReportVisible] = useState(false); // Estado para el informe de la colección
  const userDataAuth = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userDataAuth?.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Si no está autenticado, redirigir a la página de login
    }
  }, [isAuthenticated, navigate]);

  // Función para manejar la visibilidad del informe de usuarios
  const handleToggleUserReport = () => {
    setIsUserReportVisible((prevState) => !prevState); // Alterna entre visible/no visible
    if (!isUserReportVisible) {
      fetchUserReportData(); // Llama la función para obtener los usuarios cuando se muestre el informe
    }
  };

  // Función para manejar la visibilidad del informe de la colección
  const handleToggleCollectionReport = () => {
    setIsCollectionReportVisible((prevState) => !prevState); // Alterna entre visible/no visible
    if (!isCollectionReportVisible) {
      fetchReportData(); // Llama la función para obtener los datos de la colección cuando se muestre el informe
    }
  };

  // Función para obtener el informe de la colección
  const fetchReportData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3030/getItems");
      const data = await response.json();

      if (response.ok) {
        setData(data.data); // Aquí supongo que la data es el informe de la colección
        setIsReportGenerated(true);
        setIsCollectionReportVisible(true); // Mostrar el informe de colección
      } else {
        throw new Error("Error al obtener los datos del informe");
      }
    } catch {
      setError("Hubo un problema al cargar los datos. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener los datos de los usuarios
  const fetchUserReportData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3030/getUsers"); // Endpoint para obtener los usuarios
      const data = await response.json();

      if (response.ok) {
        setUserData(data.data); // Almacenar los usuarios en el estado
        setIsUserReportVisible(true); // Mostrar el informe de usuarios
      } else {
        throw new Error("Error al obtener los datos del informe de usuarios");
      }
    } catch (error) {
      setError("Hubo un problema al cargar los datos de los usuarios. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu nombreUsuario={userDataAuth?.nombreUsuario} />

      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección y de los usuarios. Haz clic en los botones de abajo para generar los informes.
        </Typography>

        {/* Botones para generar informes *//*}
        {!loading && (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, mt: 3 }}>
            <Tooltip title="Haz clic para generar el informe de la colección" arrow placement="top">
              <Button
                variant="contained"
                color="primary"
                onClick={handleToggleCollectionReport} // Llamar a la función para mostrar/ocultar el informe de colección
                sx={{
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "50%",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                GENERAR INFORME COLECCIÓN
              </Button>
            </Tooltip>

            <Tooltip title="Haz clic para generar el informe de los usuarios" arrow placement="top">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleToggleUserReport} // Llamar a la función para mostrar/ocultar el informe de usuarios
                sx={{
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "50%",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
              >
                GENERAR INFORME USUARIOS
              </Button>
            </Tooltip>
          </Box>
        )}

        {/* Estado de carga *//*}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Mensaje de error *//*}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* Informe de la colección *//*}
        {isCollectionReportVisible && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Informe de la Colección
            </Typography>
            {/* Aquí se muestra el componente InformeColeccion *//*}
            <InformeColeccion data={data} />
          </Paper>
        )}

        {/* Informe de usuarios *//*}
        {isUserReportVisible && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <Typography variant="h6" color="secondary" gutterBottom>
              Informe de Usuarios
            </Typography>
            {/* Mostrar el Informe de Usuarios *//*}
            <InformeUsuarios data={userData} /> {/* Aquí se pasa el estado con los datos de los usuarios *//*}
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;*/


//& REPORTE EXAMEN UT3 RECUPERACION 

import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Paper, CircularProgress, Alert, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import InformeUsuarios from "../components/informeUsuarios";
import InformeColeccion from "../components/InformeColeccion";
import InformeDevaluacion from "../components/InformeDevaluacion"; // Nuevo componente para el informe de devaluación

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [data, setData] = useState<any[]>([]); // Datos de la colección
  const [userData, setUserData] = useState<any[]>([]); // Datos de los usuarios
  const [devaluationData, setDevaluationData] = useState<any[]>([]); // Datos de devaluación
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isUserReportVisible, setIsUserReportVisible] = useState(false);
  const [isCollectionReportVisible, setIsCollectionReportVisible] = useState(false);
  const [isDevaluationReportVisible, setIsDevaluationReportVisible] = useState(false); // Estado para el informe de devaluación
  const userDataAuth = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userDataAuth?.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Si no está autenticado, redirigir a la página de login
    }
  }, [isAuthenticated, navigate]);

  // Función para manejar la visibilidad del informe de usuarios
  const handleToggleUserReport = () => {
    setIsUserReportVisible((prevState) => !prevState);
    if (!isUserReportVisible) {
      fetchUserReportData();
    }
  };

  // Función para manejar la visibilidad del informe de la colección
  const handleToggleCollectionReport = () => {
    setIsCollectionReportVisible((prevState) => !prevState);
    if (!isCollectionReportVisible) {
      fetchReportData();
    }
  };

  // Función para manejar la visibilidad del informe de devaluación
  const handleToggleDevaluationReport = () => {
    setIsDevaluationReportVisible((prevState) => !prevState);
    if (!isDevaluationReportVisible) {
      fetchDevaluationReportData();
    }
  };

  // Función para obtener el informe de la colección
  const fetchReportData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3030/getItems");
      const data = await response.json();

      if (response.ok) {
        setData(data.data);
        setIsReportGenerated(true);
        setIsCollectionReportVisible(true);
      } else {
        throw new Error("Error al obtener los datos del informe");
      }
    } catch {
      setError("Hubo un problema al cargar los datos. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener los datos de los usuarios
  const fetchUserReportData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3030/getUsers");
      const data = await response.json();

      if (response.ok) {
        setUserData(data.data);
        setIsUserReportVisible(true);
      } else {
        throw new Error("Error al obtener los datos del informe de usuarios");
      }
    } catch (error) {
      setError("Hubo un problema al cargar los datos de los usuarios. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener los datos de devaluación
  const fetchDevaluationReportData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3030/getDevaluacion"); // Endpoint para obtener la devaluación
      const data = await response.json();

      if (response.ok) {
        setDevaluationData(data.data);
        setIsDevaluationReportVisible(true);
      } else {
        throw new Error("Error al obtener los datos del informe de devaluación");
      }
    } catch (error) {
      setError("Hubo un problema al cargar los datos de la devaluación. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu nombreUsuario={userDataAuth?.nombreUsuario} />

      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección, de los usuarios y de la devaluación.
        </Typography>

        {/* Botones para generar informes */}
        {!loading && (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, mt: 3 }}>
            <Tooltip title="Haz clic para generar el informe de la colección" arrow placement="top">
              <Button
                variant="contained"
                color="primary"
                onClick={handleToggleCollectionReport}
                sx={{
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "50%",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                GENERAR INFORME COLECCIÓN
              </Button>
            </Tooltip>

            <Tooltip title="Haz clic para generar el informe de los usuarios" arrow placement="top">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleToggleUserReport}
                sx={{
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "50%",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
              >
                GENERAR INFORME USUARIOS
              </Button>
            </Tooltip>

            <Tooltip title="Haz clic para generar el informe de devaluación" arrow placement="top">
              <Button
                variant="contained"
                color="success"
                onClick={handleToggleDevaluationReport}
                sx={{
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "50%",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#388e3c",
                  },
                }}
              >
                GENERAR INFORME DESVALUACIÓN
              </Button>
            </Tooltip>
          </Box>
        )}

        {/* Estado de carga */}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Mensaje de error */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* Informe de la colección */}
        {isCollectionReportVisible && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Informe de la Colección
            </Typography>
            <InformeColeccion data={data} />
          </Paper>
        )}

        {/* Informe de usuarios */}
        {isUserReportVisible && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <Typography variant="h6" color="secondary" gutterBottom>
              Informe de Usuarios
            </Typography>
            <InformeUsuarios data={userData} />
          </Paper>
        )}

        {/* Informe de devaluación */}
        {isDevaluationReportVisible && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              Informe de Devaluación
            </Typography>
            <InformeDevaluacion data={devaluationData} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;

