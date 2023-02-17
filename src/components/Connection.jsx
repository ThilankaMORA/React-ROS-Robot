import React, { Component } from 'react';
import { Alert, Container } from 'react-bootstrap';

class Connection extends Component {
    state = { connected: false, ros:null };

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

        this.state.ros.on("close", () => {
            console.log("connection is closed!");
            this.setState({connected:false});
        });
    } 
    
    render() { 
        return (
        <div>
        <Alert className={this.state.connected? "alert-custom-green":"alert-custom-red"}>{this.state.connected? "Robot Connected":"Robot Disconnected !"}</Alert>
        </div>
        );
    }
}
 
export default Connection;