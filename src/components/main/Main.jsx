import { StyledForm, StyledInput, StyledSelect } from "./styles"

const Main = () => {
    return <main>
        <StyledForm>
            <StyledInput type="text" placeholder="Search for a country…"/>
            <StyledSelect name="" id="">
                <option value="0">Filter by Region</option>
                <option value="1">Africa</option>
                <option value="2">America</option>
                <option value="3">Asia</option>
                <option value="4">Europe</option>
                <option value="5">Oceania</option>
            </StyledSelect>
        </StyledForm>
    </main>
}

export default Main