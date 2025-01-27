import styled from "styled-components";
import Button from "../buttons/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.navbar};
    color: ${({ theme }) => theme.text_primary};
    font-weight: bold;
    font-size: 22px;
    padding: 14px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;


const Navbar = () => {
    const nv = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/");
    return (
        <Container>
            EUREKA
            {path[1] === "create-image" ?
                (<Button
                    onClick={() => nv("/")}
                    text="Explore Images"
                    leftIcon={<ExploreIcon style={{
                        fontSize: "18px",
                    }}
                    />}
                    type="secondary"
                />) : (<Button
                    onClick={() => nv("/create-image")}
                    text="Create Image"
                    leftIcon={<AddCircleIcon style={{
                        fontSize: "18px",
                    }} />}
                />)}

        </Container>
    )
}

export default Navbar