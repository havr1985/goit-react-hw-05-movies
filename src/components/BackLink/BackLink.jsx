import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { BackLinkStyled, Text } from './BackLink.styled'

export const BackLink = ({ to = '/' }) => {
    return (
        <BackLinkStyled to={to}>
            <BsFillArrowLeftCircleFill size={25}/>
            <Text>Go back</Text>
        </BackLinkStyled>
    )

}