import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <main>
            <h1>Hello, Welcome</h1>
            <Link to={'/login'}>Login</Link>
        </main>
    );
}

export default LandingPage;