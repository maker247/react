import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function Layout({ children }) {
const navigate = useNavigate()

const onLogout = () => {
    localStorage.clear()
    navigate('/')
}

// useContext
const onShowAlert = (message) => {
    alert(message)
}

return (
<div>
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>            
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <button onClick={onLogout}>Logout</button>
            </li>
        </ul>
    </nav>
    {/* {React.cloneElement(children, { onShowAlert })} */}
    {React.cloneElement(children, {Alert :onShowAlert})}
</div>);
}