import React from 'react';

const Header = (props) => {
    const user = props.user
    return (
        <h1>Hello {user.name}</h1>
    )
}

export default Header;
