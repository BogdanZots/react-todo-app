import React from 'react';
import './Badge.scss'
const Badge = ({color,onClick,hexColor}) => {
    return (
            <i onClick={()=>onClick(hexColor)} className={`badge badge--${color}`}></i>
    );
}

export default Badge;
