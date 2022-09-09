import { Route, Routes } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Countries />} />
    </Routes>
  </div>
);

export default App;
