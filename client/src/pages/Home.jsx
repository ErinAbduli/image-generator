import styled from "styled-components"
import SearchBar from "../components/navbars/SearchBar.jsx"

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    padding: 30px 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: ${({ theme }) => theme.bg}
    @media (max-width: 768px) {
        padding: 6px 10px;
    }
`;

const Headline = styled.div`
    font-size: 34px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

const Span = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

const Wrapper = styled.div``;
const Home = () => {
    return (
        <Container>
            <Headline>
                Explore popular posts!
                <Span>Made with AI✨</Span>
            </Headline>
            <SearchBar />
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

export default Home