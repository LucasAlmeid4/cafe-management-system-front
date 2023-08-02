import React, { useState } from "react";

const CadastroDataCafe = () => {
    const [date, setDate] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { date };

        try {
            const response = await fetch("https://cafe-system-back-production.up.railway.app/api/datas/datas-proximo-coffee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar a data para o café da manhã.");
            }

            setMensagem("Data cadastrada com sucesso!");
            setDate(""); // Limpa o campo de data após o cadastro
        } catch (error) {
            console.error(error);
            setMensagem("Erro ao cadastrar a data para o café da manhã. Verifique os campos.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-wrapper">
                <h1>Cadastro de Data para o Café da Manhã</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">Data(Formato: Dia/Mês/Ano):</label>
                        <input
                            type="text"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                {mensagem && <p className="mensagem">{mensagem}</p>}
            </div>
        </div>
    );
};

export default CadastroDataCafe;
