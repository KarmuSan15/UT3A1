import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Login from "./pages/Login2";
import Home from './pages/Casa';
import Reports from './pages/Reporte';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./pages/Rojopaguina";
import { Provider } from 'react-redux';  // Importa el Provider de react-redux
import { store } from './store';         // Importa el store que configuraste

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: 'Home', element: <Home /> },
      { path: 'Reports', element: <Reports /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>  {/* Envuelve RouterProvider con Provider */}
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
