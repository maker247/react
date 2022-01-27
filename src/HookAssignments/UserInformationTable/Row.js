import React, {useContext} from "react";
import context from "./context";

const Row = () => {
    const {rows, delRows} = useContext(context)

    return(
        <>
            {rows.length > 0 ?
            rows.map((row) => (
                <tr key={row.id}>
                    <td className="text-center">{row.name}</td>
                    <td className="text-center">{row.age}</td>
                    <td className="text-center">{row.gender}</td>
                    <td className="w-25 text-center"><button className="btn btn-secondary text-white w-50" onClick={() => delRows(row.id)}>Delete</button></td>
                </tr>
            ))
            :
            <tr className="bg-info"><td colSpan="4"><h4 className="text-center text-white">no data!</h4></td></tr>
            }
        </>
    )
}

export default Row
