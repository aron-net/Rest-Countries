import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/Coutry/Country';
import { v4 as rid} from 'uuid';
import aron from '../../image/aron-transparent.png';
import './Home.css';

const continentData = [
    {
        id: rid(),
        name: 'Africa',
    },
    {
        id: rid(),
        name: 'Asia',
    },
    {
        id: rid(),
        name: 'Oceania',
    },
    {
        id: rid(),
        name: 'Europe',
    },
    {
        id: rid(),
        name: 'North America',
    },
    {
        id: rid(),
        name: 'South America',
    }
];

const Home = () => {
    const dispatch = useDispatch();
    const handleClick = (name) => {
        dispatch(getCountries(name));
    };
    return (
        <div className="characters-section">
            <div className="marvel-characters-title">
                <img className="ar-img" src={aron} alt="world" />
                <div className="marvel-characters-text">
                    <p className="text">All World Countries</p>
                </div>
            </div>
            <div className="marvel-characters">
                <div className="character-title">Filter By Region</div>
                <div className="vitor">
                    {continentData.map(({ id, name }) => (
                        <div key={id} className="individual-character">
                            <h2 onClick={() => handleClick(name)}>{name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;