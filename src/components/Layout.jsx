import { Outlet } from "react-router-dom";
import { Navigations } from "./Navigations/Navigations";
import { Container } from "./Layout.styled";


export const Layout = () => {
    return (
        <>
            <header>
                <Navigations/>
            </header>
        <Container>
            <Outlet/>
        </Container>
        </>
    )
}