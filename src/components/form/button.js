import React from 'react';

const Button = ({children, ...rest}) => {
    return (
        <button className="btn" {...rest} style={{
            display: 'block',
            width: '100%',
            margin: '0px',
            padding: '10px',
            background: 'black',
            fontWeight: 'bolder',
            color: 'white',
            textTransform: 'uppercase',
            border: '0',
            outline:'none'
        }}>
            {children}
        </button>
    )
}

export default Button;
