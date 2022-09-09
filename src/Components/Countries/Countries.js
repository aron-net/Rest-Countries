import { useSelector } from "react-redux";
import './Countries.css';
import '../Home/Home.css';

const Countries = () => {
    const item = useSelector((state) => state.country)
    return (
        <>
            <div className="ar-characters-title-1">
            <div className="ar-characters-text">
                <p className="text"> Countries</p>
            </div>
        </div>
        <div className="ar-characters">
            <div className="character-title">
            </div>
            <table>
                <caption>All Countries</caption>
                <thead>
                    <tr>
                        <th scope="col">Country Flag</th>
                        <th scope="col">Country Name</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Sub Region</th>
                        <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((country) => (
                        <tr key={country.alpha2Code}>
                            <td data-label="Country Flag"><img src={country.flags.png} className="flag-img" alt="flag" /></td>
                            <td data-label="Country Name">{country.name}</td>
                            <td data-label="Capital">{country.capital}</td>
                            <td data-label="Sub Region">{country.subregion}</td>
                            <td data-label="Population">{country.population}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Countries;
