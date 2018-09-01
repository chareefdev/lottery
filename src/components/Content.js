import React, { Component } from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import Slideheader from './Slideheader';
import Rooms from './lotteries/Rooms';
import Roomplay from './lotteries/roomplay/Roomplay';
import {  BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Tabswitch from './Tabswitch';
import { connect } from 'react-redux';
import Lotpage from './Lotpage';
import Register from './Register';

class Content extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     activeTab: this.props.getCart.tabActive
        // };
    }
    render() {

        return (
            <div style={{ paddingTop: '100px', minHeight: '700px' }}>
                <Container fluid>
                    <Row>
                        <Container>
                            <Lotpage/>                  
                        </Container>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Content;