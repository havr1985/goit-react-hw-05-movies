
import { ErrWrap, Title, Text, LinkHome } from "./ErrorPage.styled";


export default function ErrorPage() {
    return (
        <main>
            <ErrWrap>
                <Title>404</Title>
                <Text>Page Not Found </Text>
                <LinkHome to='/'>HOME PAGE</LinkHome>
            </ErrWrap>
        </main>
    )

}