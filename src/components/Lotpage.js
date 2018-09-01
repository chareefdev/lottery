import React, { Component } from 'react';
import Tabswitch from './Tabswitch';
import Rooms from './lotteries/Rooms';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import { connect } from 'react-redux';
class Lotpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.getCart.tabActive
        };
    }
    render() {
        return (
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <Tabswitch />
                </div>
                <div>
                    <TabContent activeTab={this.props.getCart.tabActive}>
                        <TabPane tabId="1">
                            <Rooms typeRoom="normal" />
                        </TabPane>
                        <TabPane tabId="2">
                            <Rooms typeRoom="collection" />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getCart: state.cart
    }
}

export default connect(mapStateToProps)(Lotpage);