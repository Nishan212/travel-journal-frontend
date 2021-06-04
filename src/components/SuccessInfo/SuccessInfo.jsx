import React from 'react';
import './SuccessInfoStyles.scss';

function SuccessInfo({ text }) {
    return <div className="rounded success-container">{text}</div>;
}

export default SuccessInfo;
