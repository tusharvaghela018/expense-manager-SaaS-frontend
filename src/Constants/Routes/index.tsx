import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
const Home = lazy(() => import('@/Pages/Home'))
const Login = lazy(() => import('@/Pages/Auth/Login'))
const Signup = lazy(() => import('@/Pages/Auth/Signup'))
const Dashboard = lazy(() => import('@/Pages/Dashboard'))
const NotFound = lazy(() => import('@/Pages/NotFound'))

export type RouteType = {
    [key in "DEFAULT" | "HOME" | "LOGIN" | "SIGNUP" | "DASHBOARD" | "NOT_FOUND"]: {
        path: string,
        routeType: "authenticated" | "un-authenticated" | "public",
        element: RouteObject["element"]
    }
}

export const ROUTES: RouteType = {
    LOGIN: {
        path: "/login",
        routeType: "un-authenticated",
        element: <Login />
    },
    SIGNUP: {
        path: "/signup",
        routeType: "authenticated",
        element: <Signup />
    },
    HOME: {
        path: "/",
        routeType: "public",
        element: <Home />
    },
    DASHBOARD: {
        path: "/dashboard",
        routeType: "authenticated",
        element: <Dashboard />
    },
    DEFAULT: {
        path: "/",
        routeType: "public",
        element: <Home />
    },
    NOT_FOUND: {
        path: "*",
        routeType: "public",
        element: <NotFound />
    }
} as const