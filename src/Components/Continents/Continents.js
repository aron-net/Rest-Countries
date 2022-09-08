import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/Country/Country';
import { v4 as rid} from 'uuid';
import '../Home/Home.css';
import { Link } from 'react-router-dom';


const continentData = [
    {
        id: rid(),
        name: 'Africa',
    },
    {
        id: rid(),
        name: 'Asia',
        afro: 'africa.jpg'
    },
    {
        id: rid(),
        name: 'Oceania',
        afro: 'afr'
    },
    {
        id: rid(),
        name: 'Europe',
        afro: 'africa.jpg'
    },
    {
        id: rid(),
        name: 'North America',
        afro: 'africa.jpg'
    },
    {
        id: rid(),
        name: 'South America',
        afro: 'africa.jpg'
    }
];

const Continent = () => {

    const dispatch = useDispatch();
    const handleClick = (name) => {
        dispatch(getCountries(name));
    };

    return (
        <div className="vitor">
            {continentData.map(({ id, name }) => (
                <div key={id} className="individual-character">
                    <Link to={`/${name}`}>
                        {/* <img clasName="afro" src={afro} alt="aron" /> */}
                        <h2 className="continent-title" onClick={() => handleClick(name)}>{name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Continent;