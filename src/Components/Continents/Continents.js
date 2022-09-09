import { useDispatch } from 'react-redux';
import { useState } from 'react';
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

const Continent = () => {

    const dispatch = useDispatch();
    const handleClick = (name) => {
        dispatch(getCountries(name));
    };

    const [inputText, setInputText] = useState('');
    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    
    const filteredData = continentData.filter((item) => {
        if (inputText === '') {
            return (
                <div className="ar-text">There is np item</div>
            );
        } else {
            return item.name.toLowerCase().includes(inputText)
        }
    })

    return (
        <div className="fix">
            <input className="input" type="text" placeholder="Search - continent" onChange = {inputHandler} />
            <div className="vitor">
                {filteredData.map(({ id, name }) => (
                    <div key={id} className="individual-character">
                        <Link to={`/${name}`}>
                            {/* <img clasName="afro" src={afro} alt="aron" /> */}
                            <h2 className="continent-title" onClick={() => handleClick(name)}>{name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Continent;