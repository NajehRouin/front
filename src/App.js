import Home from'./Home';
import { BrowserRouter, Switch, Route ,Routes} from 'react-router-dom';
import Accueil from './Component/Accueil/Accueil';
import Videos from './Component/Videos/Videos';
import Cours from './Component/Cours/Cours';
import Messenger from './Component/Messenger/Messenger';
import Event from './Component/Event/Event';
import Register from './Register';
import Login from './Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/accueil' element={<Accueil/>}/>
      <Route exact path='/videos' element={<Videos/>}/>
      <Route exact path='/cours' element={<Cours/>}/>
      <Route exact path='/messenger' element={<Messenger/>}/>
      <Route exact path='/event' element={<Event/>}/>
      <Route exact path='/' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
