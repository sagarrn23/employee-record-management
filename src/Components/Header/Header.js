import React from 'react';

const Header = (props) => {
    return(
        <header className="col-md-12">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;