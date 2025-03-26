
import { useEffect, useState } from 'react'
import { FlexConteiner } from './components/FlexConteiner/FlexConteiner'
import styles from './App.module.css'
import { CountryCard } from './components/CountryCard/CountryCard';


function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  
  const uniqueCountryRegions = [...new Set(countries.map(country => country.region))];

  // Filtrujemy kraje, jeśli wybrano region
  const filteredCountries = selectedRegion
    ? countries.filter(country => country.region === selectedRegion)
    : countries;

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

  return (
    <>
        <FlexConteiner>
          <div className={styles.searchBar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input type="text" placeholder="Search for a country..." />
          </div>
          
          <div className={styles.filterBar}>
            <select  name="region" id="region" onChange={(e) => setSelectedRegion(e.target.value)}>
              <option value={""}>Filter by Region</option>
              {uniqueCountryRegions.map((region) => (
                <option key={region} value={region}>
                  {region || "Brak regionu"}
                </option>
              ))}
            </select>
          </div>

          
        
        </FlexConteiner>
        <div className={styles.countries}>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))
          ) : (
            <p>Brak wyników dla wybranego kraju.</p>
          )}
        </div>
        </>
  )
}

export default App
