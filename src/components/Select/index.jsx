import React from 'react';

const Select = ({ label, name, options, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select value={value} onChange={onChange} name={name} id={name}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
