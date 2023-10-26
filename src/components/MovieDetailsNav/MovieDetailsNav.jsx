import { Link, ListNav } from "./MovieDetailsNav.styled";

export const MovieDetailsNav = () => {
    return (
        <ListNav>
            <li>
                <Link to='cast'>CAST</Link>
            </li>
            <li>
                <Link to='reviews'>REVIEWS</Link>
            </li>        
        </ListNav>
    )
};