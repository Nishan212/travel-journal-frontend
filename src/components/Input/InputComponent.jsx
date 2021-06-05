import React from 'react';
import './InputStyles.scss';

function Input({ label, placeholder, name, type, onChange }) {
    return (
        <div className="input-container">
            <label className="label" htmlFor={name}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    id={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    cols="30"
                    rows="10"
                />
            ) : (
                <input
                    onChange={onChange}
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

export default Input;
