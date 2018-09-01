import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery'
import './Roomplay.css'
import { connect } from 'react-redux';
import Number from './Number';
class Roomplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            roomID:this.props.roomID
        };

        let arrs = []
        let alreadyCreate = this.props.getCart.itemsActive
        // console.log(typeof hasit);
        if(!alreadyCreate.hasOwnProperty(this.props.roomID)){
            for(let i = 0;i<=99;i++){
                // console.log([i]);
                arrs = {...arrs,[this.zeroPrefix(i)]:{
                    selected:false
                }}
            }
            this.props.activeItems(this.state.roomID,arrs)
        }
     

        
    }

    zeroPrefix = (str) => {
        return str < 10 ? "0"+str : str;
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        let listnum = []
        for (let index = 0; index < 100; index++) {
            listnum.push(index)            
        }
        let pushNums = listnum.map((num)=>
            <Number typeRoom={this.props.typeRoom} roomID={this.state.roomID} numberLot={this.zeroPrefix(num)}/>
        )
        return (
            <Modal  onClosed={this.props.changePage} isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader className="bg-dark text-light" toggle={this.toggle}>
                    หวยประจำวันที่ 1
                </ModalHeader>
                <ModalBody className="modalBody">
                    <div className="d-flex flex-wrap justify-content-center" style={{width:'100%'}}>
                        {pushNums}
                    </div>
                </ModalBody>
            </Modal>

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
        activeItems: (roomid,itemsArr) => {
            dispatch({
                type: "ITEMS_ACTIVE_ADD",
                roomid:roomid,
                payload: itemsArr,
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Roomplay);