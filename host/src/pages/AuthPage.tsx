import { lazy, Suspense } from "react";

const RemoteAuthApp = lazy(() => import("auth/AuthApp"));

function AuthPage() {
    return (
        <>
            <Suspense fallback={<div>Loading remote application...</div>}>
                <RemoteAuthApp />
            </Suspense>
        </>
    )
}

export default AuthPage