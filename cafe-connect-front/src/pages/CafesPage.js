import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/CoffeePage.css';

const CoffeePage = () => {
    const [dates, setDates] = useState([]);

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

    return (
        <div className="coffee-page-container">
            <h1 className="coffee-page-title">Coffees Disponíveis</h1>
            <table className="coffee-table">
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Coffee Marcado</th>
                </tr>
                </thead>
                <tbody>
                {dates.map((date) => (
                    <tr key={date.date}>
                        <td>{date.date}</td>
                        <td>Sim</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoffeePage;
