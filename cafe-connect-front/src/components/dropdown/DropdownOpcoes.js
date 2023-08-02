import React from 'react';

const DropdownOpcoes = ({ opcoes }) => {
    return (
        <div className="form-group">
            <label htmlFor="opcao_id">Opção:</label>
            <select name="opcao_id" id="opcao_id">
                {opcoes.map((opcao, index) => (
                    <option key={opcao.id} value={opcao.id}>
                        {index + 1}. {opcao.descricao}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownOpcoes;
