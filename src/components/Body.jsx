import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';

class Body extends Component {
    //state = {  } 
    render() { 
        return (
        <Container>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </Router>
        </Container>
        );
    }
}
 
export default Body;