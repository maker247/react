import React, {useContext} from "react";
import context from "./context";

const Header = () => {
    const {addRows} = useContext(context)
    return(
        <thead>
            <tr>
                <th className="text-center" colSpan="3">User Informations</th>
                <th colSpan="1" className="w-25 text-center"><button onClick={() => addRows()} className="btn btn-info text-white w-50"
                >Add Row</button></th>
            </tr>
            <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Age</th>
                <th className="text-center">Gender</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
    )
}

export default Header
