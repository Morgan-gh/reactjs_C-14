/* Import CSS principal */
import './App.css';

/* Import Components */
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import LogReg from './Pages/LogReg/LogReg';
import Sports from './Pages/Sports/Sports';
import SportEvents from './Pages/Sports/SportEvents';
import Events from './Pages/Events/Events';
import Account from './Pages/Account/Account';
import Delegation from './Pages/Delegation/Delegation';

/* Import React Router */
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} title="Home" />
        <Route path='/login' element={<LogReg />} title="Home" />
        <Route path='/sports' element={<Sports />} title="Home" />
        <Route path='/sport/:id' element={<SportEvents />} title="Home" />
        <Route path='/event/:id' element={<Events />} title="Home" />
        <Route path='/account' element={<Account />} title="Account" />
        <Route path='/delegation' element={<Delegation />} title="Delegation" />
      </Routes>
    </div>
  );
}

export default App;