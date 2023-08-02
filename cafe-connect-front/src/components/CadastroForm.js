import React, { useState } from "react";
import "../css/CadastroForm.css"

const CadastroForm = ({ onSubmit }) => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ nome, cpf });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label> Nome completo: </label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label>CPF(sem pontos): </label>
                <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    );
};

export default CadastroForm;
