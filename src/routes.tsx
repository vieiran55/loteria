import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiaDeSorte from "./pages/DiaDeSorte";
import Home from "./pages/Home";
import Lotofacil from "./pages/Lotofacil";
import Lotomania from "./pages/Lotomania";
import Mega from "./pages/Mega";
import Quina from "./pages/Quina";
import Timemania from "./pages/Timemania";



export default function AppRouter() {
  const [navValue, setNavValue] = useState("Selecione o Jogo");

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="mega" element={ <Mega navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="quina" element={ <Quina navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="lotofacil" element={ <Lotofacil navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="timemania" element={ <Timemania navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="lotomania" element={ <Lotomania navValue={navValue} setNavValue={setNavValue}/>}/>
        <Route path="diadesorte" element={ <DiaDeSorte navValue={navValue} setNavValue={setNavValue}/>}/>
      </Routes>
    </Router>
  );
}
