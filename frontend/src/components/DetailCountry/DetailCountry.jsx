
import { NavLink, useParams } from 'react-router-dom';
import styles from './DetailCountry.module.css';
import { useEffect, useState } from 'react';
export function DetailCountry() {
    const { countryName } = useParams();

    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/countries`)
        .then((response) => response.json())
        .then((data) => {
            const selectedCountry = data.find(c => c.name === countryName);
            setCountry(selectedCountry);
        })
        .catch((error) => console.error(error));
    }, [countryName]);

  if (!country) return <p>Ładowanie danych...</p>;
    
    return (
        <>
        <div className={styles.backButton}>
            <NavLink to="/">
                Back
            </NavLink>
        </div>
        <div>
      <h1>Szczegóły kraju: {country.name}</h1>
      <p>Region: {country.region}</p>
      <p>Populacja: {country.population}</p>
      <p>Stolica: {country.capital}</p>
      <img src={country.flag} alt={`Flaga ${country.name}`} width="200" />
    </div>
    </>
    );
}