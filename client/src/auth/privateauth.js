// PrivateRoute.js

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './userAuth';

const PrivateRoute = ( ) => {
  const { token } = useAuth();

  return (
    <>
      {token ? <Outlet/> : <Navigate to="/login" replace={true} />}
    </>
  );
};

export default PrivateRoute;
