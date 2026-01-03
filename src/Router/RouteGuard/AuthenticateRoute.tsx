import Loader from '@/Common/Loader';
import { ROUTES } from '@/Constants/Routes';
import { getAuth } from '@/Redux/ducks/auth';
import React, { Suspense, type PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { token } = useSelector(getAuth);

  if (!token) {
    return <Navigate to={ROUTES.LOGIN.path} />;
  }
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default AuthenticateRoute;
