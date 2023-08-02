import React from "react";
import "../css/home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h2 className="home-title">Bem-vindo à Café Connect</h2>
            <p className="home-content">
                Esta é a página inicial da aplicação Café Connect. Aqui você pode navegar para diferentes telas para realizar
                cadastros e ver a lista de participantes com suas opções de café.
            </p>

            <ul className={"options"}>

                <li>
                    <Link className={"links"} to="/lista-cafes">Proximos Coffes</Link>
                </li>

                <li>
                    <Link className={"links"} to="/agendar-proximo-coffe">Agendar Data de um proximo coffe</Link>
                </li>

                <li>
                    <Link className={"links"} to="/lista-participantes-opcoes">Lista de Participantes</Link>
                </li>

                <li>
                    <Link className={"links"} to="/cadastropage">Pré-cadastro em um Coffe</Link>
                </li>
                <li>
                    <Link className={"links"} to="/sugestao">Sugestão de opção de café da manhã</Link>
                </li>
                <li>
                    <Link className={"links"} to="/cadastro">Confirmar presença em um Coffe</Link>
                </li>


            </ul>
        </div>
    );
};

export default Home;
