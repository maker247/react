import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({email: '', password: ''})
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/home');
        }
    }, [])

    const onHandleChange = (event, f) => {
        const {value} = event.target
        let _form = {...form}
        _form[f] = value
        setForm(_form)
    }

    const onLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('token', `${form.email}${form.password}`)
        navigate('/home')
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <h2>Login Form</h2>
                <label>Name: </label>
                <input type="email" value={form.email} 
                        onChange={(event) => onHandleChange(event, 'email')}/>
                <br />
                <label>Password: </label>
                <input type="password" value={form.password} 
                        onChange={(event) => onHandleChange(event, 'password')}/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}