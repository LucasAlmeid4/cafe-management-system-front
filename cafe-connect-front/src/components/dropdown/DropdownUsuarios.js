import React from 'react';
import '../../css/DropDown.css'

const DropdownUsuarios = ({ usuarios }) => {
    return (
        <div className="form-group">
            <label htmlFor="usuario_id">Usuário:</label>
            <select name="usuario_id" id="usuario_id">
                {usuarios.map((usuario, index) => (
                    <option key={usuario.id} value={usuario.id}>
                        {index + 1}. {usuario.nome}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownUsuarios;
