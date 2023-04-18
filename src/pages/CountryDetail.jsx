import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { StyledCountry, StyledButton, StyledFlag } from "./styles";



const CountryDetail = () => {
    const params = useParams()
    const [dataCountry, setDataCountry] = useState([])
    const country = dataCountry[0]
    const navigate = useNavigate()
    
    

    useEffect(() => {
        fetchData (`https://restcountries.com/v3.1/name/${params.country}`, setDataCountry)
    }, []);


    if(dataCountry.length === 0) return <h1>Loading...</h1>
    return <StyledCountry>
        <StyledButton onClick={() => navigate(`/`)}> Back </StyledButton>
            <div>
                <StyledFlag src={country.flags.svg} alt="" />
                <h2>{country.name.common}</h2>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Subregion: <span>{country.subregion}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
            <div>
                <p>Top Level Domain: <span>{country.tld}</span></p>
                <p>Currencies: <span>{Object.values(country.currencies)[0].name}</span></p>
                <p>Languages: <span>{country.subregion}</span></p>
            </div>
    </StyledCountry>
}

const fetchData = async (url, setDataCountry) =>{
    const request = await fetch(url);
    const dataCountry = await request.json()
    setDataCountry(dataCountry)
    console.log(Object.values(dataCountry[0].languages));
    
}

export default CountryDetail