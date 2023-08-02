import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/OpcoesPage.css';

const OpcoesPage = () => {
    const [opcoes, setOpcoes] = useState([]);

    useEffect(() => {
        fetchOpcoes();
    }, []);

    const fetchOpcoes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/opcoes');
            setOpcoes(response.data);
        } catch (error) {
            console.error('Error fetching opcoes:', error);
        }
    };

    return (
        <div className="opcoes-page-container">
            <h1 className="opcoes-page-title">Opções Disponíveis</h1>
            <table className="opcoes-table">
                <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                {opcoes.map((opcao, index) => (
                    <tr key={index}>
                        <td>{opcao.descricao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OpcoesPage;
