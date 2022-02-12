import React from 'react';
import { Navigate } from 'react-router-dom'
import Layout from './Layout';

export default function PrivateRoute({ children }) {
    return (
        <div>
            {localStorage.getItem('token') ?
                (<Layout>{children}</Layout>) :
                <Navigate to={{ pathname: '/'}}/>
            }
        </div>
    )
}