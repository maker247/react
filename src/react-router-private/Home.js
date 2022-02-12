import React from 'react';

export default function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            {/* <button onClick={() => props.onShowAlert("Home alert")}>Show alert</button> */}
            <button onClick={() => props.Alert("Home alert")}>Show alert</button>
        </div>
    )
}