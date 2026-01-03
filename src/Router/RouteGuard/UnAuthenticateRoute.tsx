import Loader from "@/Common/Loader"
import { ROUTES } from "@/Constants/Routes"
import { getAuth } from "@/Redux/ducks/auth"
import { Suspense, type PropsWithChildren } from "react"
import type React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const UnAuthenticateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { token } = useSelector(getAuth)

    if (!token) {
        return (
            <Suspense fallback={<Loader />}>{children}</Suspense>
        )
    }
    return (
        <Navigate to={ROUTES.DASHBOARD.path} />
    )
}

export default UnAuthenticateRoute
