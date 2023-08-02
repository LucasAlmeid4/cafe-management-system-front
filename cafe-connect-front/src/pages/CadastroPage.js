import React, { useState } from "react";
import CadastroForm from "../components/CadastroForm";
import "../css/CadastroPage.css";

const CadastroPage = () => {
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (data) => {
        try {
            const response = await fetch("https://cafe-system-back-production.up.railway.app/api/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar o colaborador.");
            }

            setMensagem("Colaborador cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
            setMensagem("Erro ao cadastrar o colaborador. Verifique os campos.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-wrapper">
                <h1>Pré Cadastro Coffe</h1>
                <CadastroForm onSubmit={handleSubmit} />
                {mensagem && <p className="mensagem">{mensagem}</p>}
            </div>
        </div>
    );
};

export default CadastroPage;
