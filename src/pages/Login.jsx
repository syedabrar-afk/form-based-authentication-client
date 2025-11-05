import axios from "axios";
import { useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleOnSubmit(e) {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:8080/auth", {
            username,
            password
        });
        alert(response.data.message);
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setUsername("")
            setPassword("")
        }
    }

    return (
        <main>
            <h1>This is the login page</h1>
            <form onSubmit={handleOnSubmit}>
                <h1>Enter your credentials</h1>

                <div>
                    <label htmlFor="username">Enter your Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Enter your Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Submit</button>
            </form>

            {
                error && <div>
                    <h3 style={{color: "red"}}>{ error }</h3>
                </div>
            }
        </main>
    );
}

export default LoginPage