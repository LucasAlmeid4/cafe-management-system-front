import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('https://cafe-system-back-production.up.railway.app/api/usuarios');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error fetching usuarios:', error);
        }
    };

    return (
        <div>
            <h2>Listagem de Usuários</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cpf}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarUsuarios;
