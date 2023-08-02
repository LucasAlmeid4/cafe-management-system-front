import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ParticipantesPage.css';

const ParticipantesPage = () => {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetchDates();
    }, []);

    const fetchDates = async () => {
        try {
            const response = await axios.get('https://cafe-system-back-production.up.railway.app/api/datas');
            setDates(response.data);
        } catch (error) {
            console.error('Error fetching dates:', error);
        }
    };

    const handleDateChange = async (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);

        const convertDate = (date) => {
            const parts = date.split('/');
            return `${parts[0]}-${parts[1]}-${parts[2]}`;
        };

        try {
            const formattedDate = convertDate(newDate);
            const response = await axios.get(`http://localhost:8080/api/lista-de-participantes?data=${formattedDate}`);
            setParticipants(response.data);
        } catch (error) {
            console.error('Error fetching participants:', error);
        }
    };

    return (
        <div className="container">

            <h1>Lista de Participantes confirmados</h1>

            <label>
                Selecione a data:
                <select value={selectedDate} onChange={handleDateChange} className="dropdown">
                    <option value="">Selecione...</option>
                    {dates.map((date) => (
                        <option key={date.id} value={date.date}>
                            {date.date}
                        </option>
                    ))}
                </select>
            </label>
            {selectedDate && participants.length > 0 ? (
                <table className="participants-table">
                    <thead>
                    <tr>
                        <th>Participante</th>
                        <th>CPF</th>
                        <th>Opção</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    {participants.map((participant) => (
                        <tr key={participant.id}>
                            <td>{participant.usuario.nome}</td>
                            <td>{participant.usuario.cpf}</td>
                            <td>{participant.opcao.descricao}</td>
                            <td>{participant.data.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-participants">Nenhum participante encontrado para a data selecionada.</p>
            )}
        </div>
    );
};

export default ParticipantesPage;
