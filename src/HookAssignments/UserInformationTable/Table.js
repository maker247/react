import React from "react";
import Header from "./Header";
import Row from "./Row";

const Table = () => {
    return(
        <table className="table table-bordered border-primary">
            <Header />
            <tbody className="border-top-0">
                <Row />
            </tbody>
        </table>
    )
}

export default Table
