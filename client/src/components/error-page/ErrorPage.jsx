import { Link } from "react-router-dom";
import Path from "../../paths";

export default function ErrorPage() {
    return (
        <div className="content-wrap error">
            <h1>Error.</h1>
            <h2>An unexpected error has occurred. Please try again later.</h2>
            <br /><br />
            <div> Go back to <Link to={Path.Home}>Home</Link> Page.</div>
        </div>
    );
}