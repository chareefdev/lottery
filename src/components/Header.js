import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link,NavLink} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
  
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Container className="navbg fixed-top" fluid>
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <Navbar dark color="dark" expand="md">
                                    <NavbarBrand href="/">
                                        <img width="70" src="https://vignette.wikia.nocookie.net/egamia/images/f/f3/Intel_logo.png/revision/latest?cb=20061005221757" />
                                    </NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse style={{ marginLeft: '25px' }} isOpen={this.state.isOpen} navbar>
                                        

                                            <Nav className="mr-auto" navbar>
                                                <NavItem style={{ marginRight: '20px' }}>
                                                    <NavLink className="linkstyle" to="/">หน้าหลัก
                                                    {/* <Link to="/">หน้าหลัก</Link> */}
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem style={{ marginRight: '20px' }}>
                                                    <NavLink className="linkstyle" to="/register">
                                                        สมัคร
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem style={{ marginRight: '20px' }}>
                                                    {/* <NavLink href="/components/">เติมเงิน</NavLink> */}
                                                </NavItem>

                                            </Nav>
                                        
                                        <Nav className="ml-auto" navbar>
                                            <NavItem>
                                                <Button color="success" style={{ marginRight: '10px' }}>DEPOSIT</Button>
                                            </NavItem>
                                            {/* <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret>
                                                    Options
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Option 1
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Option 2
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Reset
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown> */}
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </Col>

                        </Row>
                    </Container>
                </Row>

            </Container>
        );
    }
}

export default Header;