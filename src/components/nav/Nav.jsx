import { useNavigate } from "react-router-dom"
import { StyledUl, StyledDiv, StyledH1 } from "./styles"

const Nav = () => {
    const navigate = useNavigate()
    return <nav>
        <StyledUl>
            <StyledH1 onClick={() => navigate(`/`)}>Where in the world?</StyledH1>
            <StyledDiv>
                <img src="/moon-icon.png" alt="moon" />
                <p>Dark Mode</p>
            </StyledDiv>
        </StyledUl>
    </nav>
}

export default Nav