import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        
        console.log("Parent- constructor");
    }

    componentDidMount() {
        //Best place to make an API Call

        console.log("Parent- componentDidMount");
    }

    render () {
        console.log("Parent- render");
        return (
            <div>
                <h1>About Us Page</h1><br/>
                <p>
                    This is the react studying tutorial
                </p>
                <Profile />
                {/* <Profile name={"First Child"}/>
                <Profile name={"second Child"}/> */}
            </div>
        );
    }
}

export default About;