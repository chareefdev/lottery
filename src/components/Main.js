import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Orderslot from './Orderslot';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register';
class Main extends Component {
    render() {
        return (
            <div style={{ background: '#e8e8ea' }}>
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Content} />
                        <Route exact path="/register" component={Register} />
                        <Orderslot />
                        <Footer />
                    </div>
                </Router>
            </div>

        );
    }
}

export default Main;