import React from 'react';
import './ErrorStyles.scss';

function ErrorInfo({ text }) {
    return <div className="rounded error-container">{text}</div>;
}

export default ErrorInfo;
