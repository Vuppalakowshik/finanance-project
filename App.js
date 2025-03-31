import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mainpage } from './components/Main/Mainpage';
import { Loginpage } from './components/Banner/Loginpage/loginpage';
import SipCalculator from "./components/Sipcalculator/Sipcalculs"; // Import SIP Calculator


const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/mainpage" element={<Mainpage />} ></Route>
    <Route path="/loginpage" element={<Loginpage/>} ></Route>
    <Route path="/sipcalculator" element={<SipCalculator />} ></Route>


    </Routes>

    </BrowserRouter>
  );
};
export default App;
