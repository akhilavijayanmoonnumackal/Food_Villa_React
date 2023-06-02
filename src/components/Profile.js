import { useEffect, useState } from "react";


const Profile = (props) => {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    useEffect(() => {
        //API Call
        const timer = setInterval(() => {
            console.log("NAMASTE REACT");
        }, 1000); 
        console.log("useEffect");
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        }
    },[]);
    console.log("render");

    return (
        <div>
            <h1>My Profile</h1><br/>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button onClick= {() => {
                setCount(1)
                }}>count</button>
        </div>
    )
}

export default Profile;