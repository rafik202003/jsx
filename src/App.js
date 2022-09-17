
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile/Profile';
import FullName from './Components/Profile/FullName';
import Adresse from './Components/Profile/Adresse';


function App() {
  return (
    <div className="App">
       <Profile/>
       <FullName/>
       <Adresse/>

       
    </div>
  );
}

export default App;
