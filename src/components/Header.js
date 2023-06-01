import { useState,useEffect } from "react";
import Logo from '../assets/img/food.png';
import { Link } from "react-router-dom";

const loggedInUser = () => {
    //API call to check authentication
    return false;

}

const Title =  () => (
    <a href="/">
    <img className="logo"
    src={Logo}
    // src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" 
    alt="logo" />
    </a>
);

const Header = () => { 
    // const [title, setTitle]=useState("Food Villa");

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("useEffect");
    },[])


    console.log("render");
    return (
        <div className="header">
            <Title/>
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
                    ) : ( 
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}
        </div>
    );
};

export default Header;