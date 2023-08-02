import React, { useState, useEffect } from 'react';
import '../css/CadastroPage.css';

import DropdownUsuarios from '../components/dropdown/DropdownUsuarios';
import DropdownOpcoes from '../components/dropdown/DropdownOpcoes';
import DropdownDatas from '../components/dropdown/DropdownDatas';

const CadastroParticipanteForm = () => {
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [opcoes, setOpcoes] = useState([]);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        // Carregar dados dos dropdowns ao carregar o componente
        fetchUsuarios();
        fetchOpcoes();
        fetchDatas();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/usuarios');
            if (response.ok) {
                const data = await response.json();
                setUsuarios(data);
            } else {
                throw new Error('Não foi possível carregar os usuários.');
            }
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        }
    };

    const fetchOpcoes = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/opcoes');
            if (response.ok) {
                const data = await response.json();
                setOpcoes(data);
            } else {
                throw new Error('Não foi possível carregar as opções.');
            }
        } catch (error) {
            console.error('Erro ao carregar opções:', error);
        }
    };

    const fetchDatas = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/datas');
            if (response.ok) {
                const data = await response.json();
                setDatas(data);
            } else {
                throw new Error('Não foi possível carregar as datas.');
            }
        } catch (error) {
            console.error('Erro ao carregar datas:', error);
        }
    };


    const handleSubmit = async event => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const participanteData = {
            usuario_id: parseInt(formData.get('usuario_id')),
            opcao_id: parseInt(formData.get('opcao_id')),
            data_id: parseInt(formData.get('data_id')),
        };

        console.log('Dados a serem enviados:', participanteData);

        try {
            const response = await fetch('http://localhost:8080/api/participantes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(participanteData),
            });

            console.log('Resposta do servidor:', response);

            if (response.ok) {
                setMensagem('Participante cadastrado com sucesso!');
                setErro('');
                event.target.reset();
            } else {
                const data = await response.json();
                setErro(data.error || 'Item já escolhido por outro participante!');
                setMensagem('');
            }
        } catch (error) {
            setErro('Opção já escolhida! ' +
                'Por favor, escolha outra!');
            setMensagem('');
            console.error('Erro na solicitação:', error);
        }
    };

    return (
        <div className="page-container">
            <div className="form-wrapper">
                <h1>Confirmação de Presença</h1>
                {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
                {erro && <p className="mensagem-erro">{erro}</p>}
                <form onSubmit={handleSubmit}>
                    <DropdownUsuarios usuarios={usuarios} />
                    <DropdownOpcoes opcoes={opcoes} />
                    <DropdownDatas datas={datas} />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroParticipanteForm;
