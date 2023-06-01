import { useState } from "react";


const Login = () =>{
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="page">
        <div className="loginform">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" onClick={popup}>Login</div>
            <p>Or Login Using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>

            </div>
        </div>
        </div>
    )
}

export default Login;