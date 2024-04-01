import { React, useState } from "react";
import { userService } from "../services/apis.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPass] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        userService
            .registerUser({
                email: email,
                name: username,
                password: password,
            })
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="login-page px-4">
            <form className="login-form shadow-lg">
                <h4>User Register</h4>
                <input
                    className="my-4"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="my-4"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                    value={username}
                />
                <input
                    className="my-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    value={password}
                />
                <input
                    className="my-1"
                    type="submit"
                    value="Register"
                    onClick={(e) => handleSubmit(e)}
                />
                {/* add the loader and error handling */}
            </form>
        </div>
    );
};

export default Register;