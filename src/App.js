import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Home} from "./components/Home";
import {Login} from "./components/Login/Login";

import './App.css';
function App() {
  return (
    <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<Login/>}/>
          </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;
