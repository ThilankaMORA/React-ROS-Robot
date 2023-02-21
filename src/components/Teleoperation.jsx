import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component';

class Teleoperation extends Component {
    state = { ros: null };
    
    constructor() {
        super();
        this.init_connection();
    }

    init_connection(){
        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);

        this.state.ros.on("connection", () => {
            console.log("connection established!");
            this.setState({connected:true});
        });
    }

    handleMove(){
        console.log("handle move");

        var cmd_vel = new window.ROSLIB.Topic({
            ros: this.state.ros,
        });
    }

    handleStop(){
        console.log("handle stop");
    }

    render() { 
        return (
            <div>
                <Joystick 
                size={100} 
                //sticky={true} 
                baseColor="#EEEEEE" 
                stickColor="#BBBBBB" 
                move={this.handleMove} 
                stop={this.handleStop}>
                </Joystick>
            </div>
        );
    }
}
 
export default Teleoperation;