// Importamos la función configureStore de Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
// Importamos el reducer de autenticación que crearemos en authSlice.ts
import authReducer from './authSlice'

// Creamos el store y añadimos el reducer de autenticación
export const store = configureStore({
  reducer: {
    authenticator: authReducer, // Añadimos el reducer aquí
  },
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
