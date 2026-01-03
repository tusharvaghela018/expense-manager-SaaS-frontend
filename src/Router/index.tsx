import Loader from '@/Common/Loader';
import { ROUTES } from '@/Constants/Routes';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import AuthenticateRoute from '@/Router/RouteGuard/AuthenticateRoute';
import UnAuthenticateRoute from '@/Router/RouteGuard/UnAuthenticateRoute';

const applySuspense = (routes: RouteObject[]) => {
  return routes.map((route) => ({
    ...route,
    element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
  }));
};

const RoutesArray = applySuspense([
  ...Object.keys(ROUTES).map((key) => {
    const route = ROUTES[key as keyof typeof ROUTES];

    const routeObj: RouteObject = {
      path: route.path,
      element: route.element,
    };

    if (route.routeType === 'authenticated') {
      routeObj['element'] = <AuthenticateRoute>{route.element}</AuthenticateRoute>;
    } else if (route.routeType === 'un-authenticated') {
      routeObj['element'] = <UnAuthenticateRoute>{route.element}</UnAuthenticateRoute>;
    }

    return routeObj;
  }),
]);

const allRoutes = createBrowserRouter(RoutesArray);

const Route = () => <RouterProvider router={allRoutes} />;

export default Route;
