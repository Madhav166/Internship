import Boil from './Components/Boil';
import Magge from './Components/Magge';
import Masala from './Components/Masala';
import Wait from './Components/Wait';
import Enjoy from './Components/Enjoy';
import Home from './Components/Home';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/step-1' Component={Boil}></Route>
        <Route path='/step-2' Component={Magge}></Route>
        <Route path='/step-3' Component={Masala}></Route>
        <Route path='/step-4' Component={Wait}></Route>
        <Route path='/step-5' Component={Enjoy}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
