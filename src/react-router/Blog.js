import { useParams } from "react-router-dom";

export default function Blog() {
    const params = useParams()
    console.log(params);
    return (
        <h2>
            Blog Detail {params.slug}
        </h2>
    )
}