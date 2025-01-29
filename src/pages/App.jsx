import * as React from 'react';
import {RouterProvider } from 'react-router-dom';
import router from '../router/router';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../context/context';

function App() {
  return (
    <>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer theme='dark' /></>
  )
} 
export default App
