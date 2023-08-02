import React from 'react';
import { format, parse } from 'date-fns';

const DropdownDatasFilter = ({ datas, onChange }) => {
    const parseDate = (dateString) => {
        const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (dateRegex.test(dateString)) {
            const [, day, month, year] = dateString.match(dateRegex);
            return new Date(`${year}-${month}-${day}`);
        }
        return null;
    };

    return (
        <div className="form-group">
            <label htmlFor="data_id">Data:</label>
            <select name="data_id" id="data_id" onChange={onChange}>
                <option value="">Selecione uma data</option>
                {datas.map((data, index) => (
                    <option key={data.id} value={data.date}>
                        {index + 1}. {format(parseDate(data.date), 'dd/MM/yyyy')}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownDatasFilter;
