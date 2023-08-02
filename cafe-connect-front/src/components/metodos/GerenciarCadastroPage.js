import React from 'react';
import './GerenciarCadastroPage.css'; // Importe o arquivo de estilos CSS
import AtualizarUsuario from './AtualizarUsuario'; // Importe o componente AtualizarUsuario
import ListarUsuarios from './ListarUsuarios'; // Importe o componente ListarUsuarios
import ExcluirUsuario from './ExcluirUsuario'; // Importe o componente ExcluirUsuario

const GerenciarCadastroPage = () => {
    return (
        <div className="gerenciar-cadastro-page-container">
            <h1>Gerenciar Pré-cadastros de Usuários</h1>
            <div className="gerenciar-cadastro-section">
                <div className="gerenciar-cadastro-card">
                    <ListarUsuarios />
                </div>
                <div className="gerenciar-cadastro-card">
                    <AtualizarUsuario />
                </div>
                <div className="gerenciar-cadastro-card">
                    <ExcluirUsuario />
                </div>
            </div>
        </div>
    );
};

export default GerenciarCadastroPage;
