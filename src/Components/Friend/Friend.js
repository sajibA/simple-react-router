import React from 'react';

const Friend = (props) => {
    const { name, phone, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'

    }
    return (
        <div style={friendStyle}>
            <h2>I am:{name}</h2>
            <h3>Call me:{phone}</h3>
            <h3>Visite me:{website}</h3>
            <p>I live in:{address.city}</p>
        </div>
    );
};

export default Friend;