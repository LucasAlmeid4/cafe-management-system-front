import React from 'react';

const DropdownDatas = ({ datas }) => {
    return (
        <div className="form-group">
            <label htmlFor="data_id">Data:</label>
            <select name="data_id" id="data_id">
                {datas.map((data, index) => (
                    <option key={data.id} value={data.id}>
                        {index + 1}. {data.date}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownDatas;
