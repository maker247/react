import React, {useContext} from "react";
import { Routes } from "./Services";
import context from "./Services/context";

export default function App() {
    const cards = useContext(context)
    return (
        <context.Provider value={{cards}}>
            <Routes />
        </context.Provider>
    )
}