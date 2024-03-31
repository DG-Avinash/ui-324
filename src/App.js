import { BrowserRouter} from "react-router-dom";
import { createContext } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

 import Header from './component/Header/Header.js';
//import Body from './Pages/Body/Body';
//import Footer from './Pages/Footer/Footer';
//import Home from './Pages/Home/Home';
  import Routess from './Pages/Routess/Routess.js';
  export const commonData=createContext();

  const user="Admin";

function App() {
  return (
    <commonData.Provider value={{userData:user}}>
    <BrowserRouter>
        <div className="App">
          <Routess/>
        </div>
    </BrowserRouter>
    </commonData.Provider>
  
  );
}

export default App;
