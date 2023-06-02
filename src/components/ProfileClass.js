import React from "react";

class Profile extends React.Component{

    constructor(props) {
        super(props);
        //create state
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: " Dummy Location",
            },
        };
        console.log("Child- Constructor"+ this.props.name);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("NAMASTE REACT");
        }, 1000);        
        //console.log("Child- componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count !== prevState.count) {

        }
        //console.log("Component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        //console.log("component Will Unmount");
    }

    render() {
        const {count} = this.state;
        //console.log("Child- render"+ this.props.name);
        return (
            <div>
                <h1>Profile class Component</h1>
                <img src={this.state?.userInfo?.avatar_url}/>
                <h2>Name: {this.state?.userInfo?.name}</h2>
                <h2>Location: {this.state?.userInfo?.location}</h2>
            </div>
        );
    }
}

export default Profile;