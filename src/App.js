import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Home} from "./components/Home";
import {Login} from "./components/Login/Login";
import {User} from "./components/User/User.js";
import { ProtectedRouter } from "./components/Helper/ProtectedRouter";

import './App.css';
function App() {
  return (
    <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login/*" element={<Login/>}/>
            <Route path="conta/*" element={<ProtectedRouter><User/></ProtectedRouter>}/>
          </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;
