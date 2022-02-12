import { Link, Outlet, useSearchParams } from "react-router-dom";
const Blogs = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('info'));
return (
    <div>
        <Link to={`/blogs/abc`}>ABC</Link><br />
        <Link to={`/blogs/def`}>DEF</Link>
        <Outlet />
    </div>
)
};
export default Blogs;