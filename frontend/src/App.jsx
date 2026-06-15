import { useEffect, useState } from "react";
import { FlexConteiner } from "./components/FlexConteiner/FlexConteiner";
import styles from "./App.module.css";
import { CountryCard } from "./components/CountryCard/CountryCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FilterRegion } from "./components/FilterRegion/FilterRegion";
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCountryRegions = [
    ...new Set(countries.map((country) => country.region)),
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    const matchesSearch = searchQuery ? country.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesRegion && matchesSearch;
  });

  useEffect(() => {
    fetch("http://localhost:5000/countries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <FlexConteiner>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterRegion uniqueCountryRegions={uniqueCountryRegions} setSelectedRegion={setSelectedRegion} />
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
  );
}

export default App;
