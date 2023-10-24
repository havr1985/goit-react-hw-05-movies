import { BtnWrap, Btn } from "./LoadMore.styled";

export const LoadMore = ({ onClick }) => {
    return (
        <BtnWrap>
            <Btn type="button" onClick={onClick}>Load more</Btn>
        </BtnWrap>
    )

};