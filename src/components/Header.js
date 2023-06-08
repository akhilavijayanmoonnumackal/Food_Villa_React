import { useState,useEffect } from "react";
import Logo from '../assets/img/food.png';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
    //API call to check authentication
    return false;
}

const Title =  () => (
    <a href="/">
    <img className="h-16 p-2"
    src={Logo}
    // src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" 
    alt="logo" />
    </a>
);

const Header = () => { 
    // const [title, setTitle]=useState("Food Villa");

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    useEffect(() => {
        console.log("useEffect");
    },[])

    console.log("render");

    return (
        <div className="flex justify-between bg-black shadow-lg">
            <Title/>
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
            <div className="nav-items" >
                <ul className="flex py-5 text-yellow-500">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2">Cart</li>
                    {/* <Link to="/login"><li>Login</li></Link> */}
                </ul>
            </div>
            <h1>{isOnline? "✅" : "🔴" }</h1>
            <ul className="flex py-5 text-yellow-500">
            <Link to="/login"><li>
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
                    ) : ( 
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}
                </li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;