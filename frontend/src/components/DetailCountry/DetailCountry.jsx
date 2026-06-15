
import { NavLink, useParams } from 'react-router-dom';
import styles from './DetailCountry.module.css';
import { useEffect, useState } from 'react';

export function DetailCountry() {
    const { countryName } = useParams();

    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/countries`)
        .then((response) => response.json())
        .then((data) => {
            const selectedCountry = data.find(c => c.name === countryName);
            setCountry(selectedCountry);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, [countryName]);

    if (loading) return <div className={styles.container}><p style={{ padding: '2rem', textAlign: 'center' }}>Ładowanie danych...</p></div>;
    if (!country) return <div className={styles.container}><p style={{ padding: '2rem', textAlign: 'center' }}>Nie znaleziono kraju.</p></div>;
    
    return (
        <div className={styles.container}>
            <NavLink to="/" style={{ display: 'inline-block' }}>
                <button className={styles.backButton}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path></svg>
                    Back
                </button>
            </NavLink>
            <div className={styles.content}>
                <div className={styles.flagContainer}>
                    <img src={country.flag} alt={`Flaga ${country.name}`} />
                </div>
                <div className={styles.details}>
                    <h1>{country.name}</h1>
                    
                    <div className={styles.infoGrids}>
                        <div className={styles.infoColumn}>
                            <p>Native Name: <span>{country.nativeName || 'N/A'}</span></p>
                            <p>Population: <span>{country.population ? country.population.toLocaleString() : 'N/A'}</span></p>
                            <p>Region: <span>{country.region || 'N/A'}</span></p>
                            <p>Sub Region: <span>{country.subregion || 'N/A'}</span></p>
                            <p>Capital: <span>{country.capital || 'N/A'}</span></p>
                        </div>
                        <div className={styles.infoColumn}>
                            <p>Top Level Domain: <span>{country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A'}</span></p>
                            <p>Currencies: <span>{country.currencies ? country.currencies.map(c => c.name).join(', ') : 'N/A'}</span></p>
                            <p>Languages: <span>{country.languages ? country.languages.map(l => l.name).join(', ') : 'N/A'}</span></p>
                        </div>
                    </div>

                    {country.borders && country.borders.length > 0 && (
                        <div className={styles.borders}>
                            <h3>Border Countries:</h3>
                            <div className={styles.borderTags}>
                                {country.borders.map(border => (
                                    <span key={border} className={styles.borderTag}>{border}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}