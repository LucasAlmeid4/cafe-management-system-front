// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cadastro from "./pages/CadastroParticipanteForm";
import Guia from "./components/Guia";
import ParticipantesPage from "./pages/ParticipantesPage";
import CadastroPage from "./pages/CadastroPage";
import './css/App.css'
import CadastroOpcao from "./components/CadastroOpcao";
import CadastroDataCafe from "./components/CadastroDataCafe";
import CafesPage from "./pages/CafesPage";
import OpcoesPage from "./pages/OpcoesPage";
import GerenciarCadastroPage from "./components/metodos/GerenciarCadastroPage";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/guia" element={<Guia />} />
                    <Route path="/agendar-proximo-coffe" element={<CadastroDataCafe />} />
                    <Route path="/lista-participantes-opcoes" element={<ParticipantesPage />} />
                    <Route path="/cadastropage" element={<CadastroPage />} />
                    <Route path="/sugestao" element={<CadastroOpcao/>} />
                    <Route path="/lista-cafes" element={<CafesPage/>} />
                    <Route path="/lista-de-opcoes" element={<OpcoesPage/>} />
                    <Route path="/gerenciar" element={<GerenciarCadastroPage/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
