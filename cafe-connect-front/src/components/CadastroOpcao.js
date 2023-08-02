import React, { useState } from "react";
import "../css/CadastroOpcao.css";
import {Link} from "react-router-dom";

const CadastroOpcao = () => {
    const [descricao, setDescricao] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { descricao };

        try {
            const response = await fetch("https://cafe-system-back-production.up.railway.app/api/opcoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar a opção de café da manhã.");
            }

            setMensagem("Opção cadastrada com sucesso!");
            setDescricao(""); // Limpa o campo de descrição após o cadastro
        } catch (error) {
            console.error(error);
            setMensagem("Erro ao cadastrar a opção de café da manhã. Verifique os campos.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-wrapper">
                <h1>Sugira uma opção de Café da Manhã:</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <input
                            type="text"
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                {mensagem && <p className="mensagem">{mensagem}
                    <Link className={"links"} to="/lista-de-opcoes">Lista de itens já cadastrados</Link>

                </p>}
            </div>
        </div>
    );
};

export default CadastroOpcao;
