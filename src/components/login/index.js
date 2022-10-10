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
        <div>
            <div className="background">

            </div>
            <form onSubmit={handleLogin}>
                <h3>QSales</h3>

                <label htmlFor="username">Username</label>
                <input type="text"
                       placeholder="Email or Phone"
                       value={email}
                       id="username"
                       onChange={onChangeEmail}/>

                <label htmlFor="password">Password</label>
                <input type="password"
                       value={password}
                       placeholder="Password"
                       id="password"
                       onChange={onChangePassword}/>

                <button type="submit"
                        disabled={!email.length || !password.length}>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default Login