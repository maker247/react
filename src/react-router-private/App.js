import React from 'react';
import {Routes} from './Services';

export default function App() {
    const onShowAlert = (param) => {
        alert(param)
    }

    return (
        <div>
            <Routes />
        </div>
    );
}