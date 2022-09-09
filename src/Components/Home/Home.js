import Continent from '../Continents/Continents';
import './Home.css';

const Home = () => (
  <div className="characters-section">
    <div className="ar-characters-title">
      <div className="ar-characters-text">
        <p className="text"> Continents </p>
      </div>
    </div>
    <div className="ar-characters">
      <div className="character-title">Filter By Region</div>
      <Continent />
    </div>
  </div>
);

export default Home;
