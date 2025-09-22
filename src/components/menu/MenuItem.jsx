import React from 'react';

function MenuItem(props) {
    const {name, onClick} = props;
    
    return (
        <button className="menu-item" onClick={onClick}>
            {name}
        </button>
    );
}

export default MenuItem;