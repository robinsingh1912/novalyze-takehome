import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Login from '../pages/Login.tsx';
import ForgotPasswordPage from '../pages/ForgetPassword.tsx';
import Layout from '../layout/index.tsx';
import Register from '../pages/Register.tsx';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
