import React, { useState } from 'react';
import axios from 'axios';

const ExcluirUsuario = () => {
    const [id, setId] = useState('');
    const [cpf, setCpf] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleExcluir = async () => {
        setMensagem('');
        setErro('');

        if (!id || !cpf) {
            setErro('Por favor, preencha todos os campos antes de excluir.');
            return;
        }

        if (cpf.length !== 11) {
            setErro('O CPF deve conter exatamente 11 dígitos.');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8080/api/usuarios/${id}`);
            setMensagem('Usuário excluído com sucesso!');
            // Limpa os campos após a exclusão
            setId('');
            setCpf('');
            // Atualiza a página após 2 segundos
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };

    return (
        <div>
            <h2>Excluir Usuário</h2>
            <label>
                ID do usuário:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <label>
                CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <button onClick={handleExcluir}>Excluir</button>
            {mensagem && <div style={{ color: 'green', marginTop: '10px' }}>{mensagem}</div>}
            {erro && <div style={{ color: 'red', marginTop: '10px' }}>{erro}</div>}
        </div>
    );
};

export default ExcluirUsuario;
