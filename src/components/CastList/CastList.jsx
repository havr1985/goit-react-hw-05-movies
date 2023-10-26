import { List, Item, Img, TextWrap, Text } from "./CastList.styled";

export const CastList = ({ cast }) => {
    return (
        <List>
            {cast.map(({ original_name, character, profile_path, cast_id }) => {
                let url = "";
                if (profile_path) {
                    url = `https://image.tmdb.org/t/p/w200/${profile_path}`;
                } else {
                    url = 'https://ranobehub.org/img/ranobe/posters/default.jpg'
                }
                
                return (
                    <Item key={cast_id}>
                        <Img src={url} alt={original_name} />
                        <TextWrap>
                         <p>NAME: <Text>{original_name}</Text> </p>
                         <p>CHARACTER: <Text>{character}</Text></p>
                        </TextWrap>
                    </Item>
                )
            })}
        </List>
    )

}