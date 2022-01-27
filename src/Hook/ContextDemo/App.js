import React, { createContext, useContext, useState } from 'react'
import Header from './Header'
import context from './context'//No.2

const App = () => {
    const [name, setName] = useState("AAA")
    const [title, setTitle] = useState("BBB")

    return (    
        <context.Provider value={{ name, title }}>
            {/* No.3 */}
            <Header />
        </context.Provider>
    )
}

export default App