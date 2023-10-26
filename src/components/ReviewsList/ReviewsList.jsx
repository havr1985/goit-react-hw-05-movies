import { List, Item, ErrMsg } from "./ReviewsList.styled";

export const ReviewsList = ({ reviews }) => {
    if (reviews.length === 0) {
        return (
            <ErrMsg>
                Does not have any reviews for this movie yet
            </ErrMsg>
        )
    }
    return (
        <List>
            {reviews.map(({ author, content, id }) => {
                return (
                    <Item key={id}>
                        <h2>Author: {author}</h2>
                        <p>{content}</p>
                    </Item>
                )
            })}
        </List>
    )   
};