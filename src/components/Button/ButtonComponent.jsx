import React from 'react';
import './ButtonStyles.scss';

function Button({ text, type, onClick, style }) {
    return (
        <>
            <button className="btn" style={style} type={type} onClick={onClick}>
                {text}
            </button>
        </>
    );
}

export default Button;
