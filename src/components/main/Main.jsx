import { useEffect, useState } from "react";
import { StyledCard, StyledForm, StyledInput, StyledSelect, StyledFlag, StyledName, StyledText, StyledSpan } from "./styles"
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";





const Main = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [dataToRender, setDataToRender] = useState([])
    const [urlToFetch, setUrlToFetch] = useState('https://restcountries.com/v3.1/all')
    

    useEffect(() => {
        fetchData (urlToFetch, setData, setDataToRender)
    }, [urlToFetch]);

    if(dataToRender.length === 0) return <h1>No results found</h1>

    return <main>
        <StyledForm>
            <StyledInput type="text" placeholder="Search for a country…" onChange={(e) => {filterBySearch(e.target.value, data, setDataToRender)}}/>

            <StyledSelect name="" id="" onChange={(e)=>{filterByRegion(e.target.value, setUrlToFetch)}}>
                <option value="0">Filter by Region</option>
                <option value="1">Africa</option>
                <option value="2">America</option>
                <option value="3">Asia</option>
                <option value="4">Europe</option>
                <option value="5">Oceania</option>
            </StyledSelect>
        </StyledForm>
        <div>{dataToRender.map(country => (
            <StyledCard key={v4()} onClick={() => navigate(`/country/${country.name.common}`)}>
                <StyledFlag src={country.flags.svg} alt="" />
                <StyledName>{country.name.common}</StyledName>
                <StyledText>Population: <StyledSpan>{country.population}</StyledSpan></StyledText>
                <StyledText>Region: <StyledSpan>{country.region}</StyledSpan></StyledText>
                <StyledText>Capital: <StyledSpan>{country.capital}</StyledSpan></StyledText>
            </StyledCard>
        ))}</div>
    </main>
}

const filterByRegion = (value, setUrlToFetch) => {
    if(Number(value) === 0) setUrlToFetch('https://restcountries.com/v3.1/all')
    if(Number(value) === 1) setUrlToFetch('https://restcountries.com/v3.1/region/africa')
    if(Number(value) === 2) setUrlToFetch('https://restcountries.com/v3.1/region/america')
    if(Number(value) === 3) setUrlToFetch('https://restcountries.com/v3.1/region/asia')
    if(Number(value) === 4) setUrlToFetch('https://restcountries.com/v3.1/region/europe')
    if(Number(value) === 5) setUrlToFetch('https://restcountries.com/v3.1/region/oceania')
    
}

const filterBySearch = (value, data, setDataToRender) => {
    const filteredData = [...data]
    if(!value) setDataToRender(data)
    else setDataToRender(filteredData.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase())))
}

const fetchData = async (url, setData, setDataToRender) =>{
    const request = await fetch(url);
    const data = await request.json()
    setData(data)
    setDataToRender(data)
}

export default Main




