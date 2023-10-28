import { Outlet } from "react-router-dom";
import { Navigations } from "./Navigations/Navigations";
import { Container } from "./Layout.styled";
import { Suspense } from "react";
import { LoadSpinner } from "./Loader";

export const Layout = () => {
    return (
        <>
            <header>
                <Navigations />
            </header>
            <Container>
                <Suspense fallback={<LoadSpinner />}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
};