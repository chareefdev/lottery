import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
class Tabswitch extends Component {
    constructor(props) {
        super(props);


        this.state = {
            activeTab: this.props.getCart.tabActive
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
        console.log(tab);
        this.props.setTab(tab)
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink style={{cursor:'pointer'}}
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            ทั่วไป
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{cursor:'pointer'}}
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            เลขชุด
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getCart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTab: (tab) => {
            dispatch({
                type: "ACTIVE_TAB",
                payload: tab
            })
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Tabswitch);