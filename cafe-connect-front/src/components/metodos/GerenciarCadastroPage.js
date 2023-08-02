import React from 'react';
import './GerenciarCadastroPage.css';
import AtualizarUsuario from './AtualizarUsuario';
import ListarUsuarios from './ListarUsuarios';
import ExcluirUsuario from './ExcluirUsuario';

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
