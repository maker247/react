import React, { useState } from 'react';

const App = () => {
    const [login, setLogin] = useState({});
    const onHandleChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target
        setLogin(values => ({ ...values, [name]: value }))
    }
    const onLogin = (event) => {
        event.preventDefault();
        console.log(login)
    }
    return (
        <form onSubmit={onLogin}>
            <h1>Login</h1>
            <label>Name: </label>
            <input type="email" name="email" value={login.email || ""}
            onChange={onHandleChange} /><br />
            <label>Password: </label>
            <input type="password" name="password" value={login.password || ""}
            onChange={onHandleChange} /><br />
            <input type="submit" value="Login" />
        </form>
    )
}
export default App