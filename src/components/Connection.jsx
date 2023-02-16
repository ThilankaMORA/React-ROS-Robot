import React, { Component } from 'react';

class Connection extends Component {
    state = {  };
    init_connection(){
        var ros = new window.ROSLIB.Ros();
    } 
    render() { 
        return (
        <div>
        <h2>Connection</h2>
        </div>
        );
    }
}
 
export default Connection;