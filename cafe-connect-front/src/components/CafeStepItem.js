import React from "react";

const CafeStepItem = ({ stepNumber, text, subItems }) => {
    return (
        <li className="step-item">
            <div className="step-number">{stepNumber}</div>
            <div className="step-text">{text}</div>
            {subItems && (
                <ul>
                    {subItems.map((item, index) => (
                        <li key={index} className="sub-item">
                            <div className="sub-number">-</div>
                            <div className="sub-text">{item}</div>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CafeStepItem;
