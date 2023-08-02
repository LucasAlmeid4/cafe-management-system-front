// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                        <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/lista-participantes-opcoes">Lista de Participantes</Link>
                </li>
                <li>
                    <Link to="/cadastro">Confirmar presença</Link>
                </li>
                <li>
                    <Link to="/cadastropage">Pré-cadastro de participação do café</Link>
                </li>
                <li>
                    <Link to="/guia">Guias e Regras</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
