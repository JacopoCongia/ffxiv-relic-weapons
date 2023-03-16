import React from 'react';

function Header(props) {
    return (
        <header className='header'>
            <h1 className="title">{props.title} Weapons Checklist</h1>
        </header>
    )
}

export default Header;