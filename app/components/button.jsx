import React from 'react';

function Button(props) {
    return (
        <div>
            <button className={props.className} onClick={props.onClick} {...props}></button>
        </div>
    );
};
export default Button;