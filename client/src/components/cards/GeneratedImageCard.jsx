import styled from "styled-components"
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
    flex: 1;
    padding: 16px;
    border: 2px dashed ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.arrow + 80};
    border-radius: 20px; 
    align-items: center;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.black + 50};

`;

const GeneratedImageCard = ({ src, loading }) => {
    return (
        <Container>
            {
                loading ? (<>
                    <CircularProgress style={{ color: "inherit", width: "24px", height: "24px" }} />
                    Generating Image...
                </>) : (
                    <>
                        {
                            src ? <Image src={src} /> : <>Write a prompt to start generating an image!</>
                        }
                    </>
                )
            }
        </Container>
    )
}

export default GeneratedImageCard