import React from 'react';

export default function Contact(props) {
    return (
        <div>
            <h1>Contact</h1>
            {/* <button onClick={() => props.onShowAlert("Home alert")}>Show alert</button> */}
            <button onClick={() => props.Alert("Contact alert")}>Show alert</button>
        </div>
    )
}