import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../components/features/appointment/appointmentSlice';

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer
  },
});
