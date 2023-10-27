import { SearchForm, SerchFormBtn, SearchInput, FormWrap } from "./SearchBar.styled";
import {BsSearch} from 'react-icons/bs'

export const SearchBar = ({ onSubmit }) => {
    return (
        <FormWrap>
            <SearchForm onSubmit={evt => {
                evt.preventDefault();
                const form = evt.currentTarget;
                const query = form.elements.search.value;
                onSubmit(query)

                form.reset();
            }}>
                <SearchInput name="search" type="text" placeholder="Enter movie name" />
                <SerchFormBtn type="submit">
                    <BsSearch size={25}/>
                </SerchFormBtn>
            </SearchForm>
        </FormWrap>
    );
};