import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const CountryDetail = () => {
    const params = useParams()
    const [data, setData] = useState([])
    
    

    useEffect(() => {
        fetchData (`https://restcountries.com/v3.1/name/${params.country}`, setData)
    }, []);

    const country = data[0]
    console.log(country);

    return <div>
        <button >Back</button>
        <h1>{params.country}</h1>
            <div>
                <img src={country.flags.svg} alt="" />
                <h2>{country.name.common}</h2>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
    </div>
}

const fetchData = async (url, setData, setDataToRender) =>{
    const request = await fetch(url);
    const data = await request.json()
    setData(data)
    
}

export default CountryDetail