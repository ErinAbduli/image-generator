import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';


const SearchBarContainer = styled.div`
    max-width: 550px;
    display: flex;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.text_secondary + 90};
    color: ${({ theme }) => theme.text_primary};
    border-radius: 8px;
    padding: 12px 16px;
    cursor: pointer;
    gap: 6px;
    align-items: center;
    `;
const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchIcon />
            <input
                type="text"
                placeholder="Search for images, collections, and more..."
                name=""
                id=""
                style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    color: "inherit",
                    background: "transparent",
                    fontSize: "16px",
                }} />
        </SearchBarContainer>
    )
}

export default SearchBar