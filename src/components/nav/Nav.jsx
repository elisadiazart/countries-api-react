import { StyledUl, StyledDiv } from "./styles"

const Nav = () => {
    return <nav>
        <StyledUl>
            <h1>Where in the world?</h1>
            <StyledDiv>
                <img src="/moon-icon.png" alt="moon" />
                <p>Dark Mode</p>
            </StyledDiv>
        </StyledUl>
    </nav>
}

export default Nav