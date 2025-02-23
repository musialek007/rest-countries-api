
import { useEffect, useState } from 'react'
import './App.css'
import { FlexConteiner } from './components/FlexConteiner/FlexConteiner'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error))
  }, [])

  console.log(countries)

  return (
    <>
      <FlexConteiner>
        <div className="searchBar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Search for a country..." />
        </div>
        
        <div className="filterBar">
          <select  name="region" id="region">
            <option value="filter">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        
      
      </FlexConteiner>
      <div className="countries">
          {
            countries.map((country) => {
              return (
                <div key={country.name} className="country">
                  <img src={country.flag} alt={country.name} />
                  <div className="countryInfo">
                    <h3>{country.name}</h3>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                  </div>
                  
                </div>
              );
            })
          }
      </div>
    </>
  )
}

export default App
