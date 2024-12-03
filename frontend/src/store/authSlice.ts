/*// Importamos la función createSlice de Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Definimos la estructura del estado de autenticación
export interface AuthState {
  isAuthenticated: boolean,
  userName: string,
  userRole: string,
}

// Estado inicial para la autenticación
const initialAuthState: AuthState = {
  isAuthenticated: false,
  userName: '',
  userRole: '',
}

// Creamos el slice de autenticación con los reducers login y logout
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    // Reducer para iniciar sesión: actualiza el estado con los datos del usuario
    login: (state, action) => {
      const userData = action.payload
      state.isAuthenticated = true
      state.userName = userData.name
      state.userRole = userData.role
    },
    // Reducer para cerrar sesión: restablece el estado inicial
    logout: (state) => {
      state.isAuthenticated = false
      state.userName = ''
      state.userRole = ''
    },
  },
})

// Exportamos las acciones para usarlas en otros componentes
export const authActions = authSlice.actions
// Exportamos el reducer para integrarlo en el store
export default authSlice.reducer*/


//&nuevo authslice para que funcione con la nueva CASA por la base de dato

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  nombreUsuario: string;
  rol: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  nombreUsuario: '',
  rol: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authenticator',
  initialState,
  reducers: {
    login(state, action) {
      state.nombreUsuario = action.payload.nombreUsuario;
      state.rol = action.payload.rol;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.nombreUsuario = '';
      state.rol = '';
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

