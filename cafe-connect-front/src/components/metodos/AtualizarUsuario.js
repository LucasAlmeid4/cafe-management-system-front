import React, { useState } from 'react';
import axios from 'axios';

const AtualizarUsuario = () => {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleUpdate = async () => {
        setMensagem('');
        setErro('');

        if (!id || !nome || !cpf) {
            setErro('Por favor, preencha todos os campos antes de atualizar.');
            return;
        }

        if (cpf.length !== 11) {
            setErro('O CPF deve conter exatamente 11 dígitos.');
            return;
        }

        try {
            const response = await axios.put(`https://cafe-system-back-production.up.railway.app/api/usuarios/${id}`, {
                nome,
                cpf,
            });
            setMensagem('Usuário atualizado com sucesso!');
            // Limpa os campos após a atualização
            setId('');
            setNome('');
            setCpf('');
            // Atualiza a página após 2 segundos
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }
    };

    return (
        <div>
            <h2>Atualizar Usuário</h2>
            <label>
                ID do usuário:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <label>
                Novo nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>
                Novo CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <button onClick={handleUpdate}>Atualizar</button>
            {mensagem && <div style={{ color: 'green', marginTop: '10px' }}>{mensagem}</div>}
            {erro && <div style={{ color: 'red', marginTop: '10px' }}>{erro}</div>}
        </div>
    );
};

export default AtualizarUsuario;
