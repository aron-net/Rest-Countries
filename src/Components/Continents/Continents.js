import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as rid } from 'uuid';
import { getCountries } from '../../redux/Country/Country';
import '../Home/Home.css';

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
  },
];

const Continent = () => {
  const dispatch = useDispatch();
  const listHandler = (name) => {
    dispatch(getCountries(name));
  };

  const [inputText, setInputText] = useState('');
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = continentData.filter((item) => {
    if (inputText === '') {
      return (
        <div className="ar-text">There is np item</div>
      );
    }
    return item.name.toLowerCase().includes(inputText);
  });

  return (
    <div className="fix">
      <input className="input" type="text" placeholder="Search - Continent" onChange={inputHandler} />
      <div className="vitor">
        {filteredData.map(({ id, name }) => (
          <button key={id} className="individual-character" type="button" onClick={() => listHandler(name)} onKeyDown={() => listHandler(name)}>
            <Link to={`/${name}`}>
              <h2 className="h2">{name}</h2>
            </Link>
          </button>
        ))}
      </div>
    </div>

  );
};

export default Continent;
