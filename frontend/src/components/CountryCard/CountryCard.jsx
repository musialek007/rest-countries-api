import { NavLink} from 'react-router-dom';
import styles from './CountryCard.module.css';

export function CountryCard({country})
{
    return(
        <NavLink to={`/detail/${country.name}`} className={styles.country}>
            <div >
                <img src={country.flag} alt={country.name} />
                <div className={styles.countryInfo}>
                <h3>{country.name}</h3>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
                </div>       
            </div>
        </NavLink>
    );
}