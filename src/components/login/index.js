import {useState} from "react";

import "./style.css"

import {useAuth} from "../../hooks/useAuth";
import useApi from "../../hooks/useApi";

const Login = () => {
    const auth = useAuth()
    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const { accessToken } = await api.login({ email, password });
            auth.signIn(accessToken);
        } catch (error) {
            console.error("error", error);
        }
    }

    return (
        <section>
            <div className="login-box">
                <h2 className="colorboard">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="user-box">
                        <input type="text"
                               value={email}
                               placeholder="Email or phone"
                               id="username"
                               onChange={onChangeEmail}/>
                    </div>
                    <div className="user-box">
                        <input type="password"
                               value={password}
                               placeholder="Password"
                               id="password"
                               onChange={onChangePassword}/>
                    </div>
                    <button type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Login