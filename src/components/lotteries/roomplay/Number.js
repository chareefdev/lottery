import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Number.css'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash';


class Number extends Component {


    constructor(props) {
        super(props)
        this.state = { numberLot: this.props.numberLot, active: this.props.getCart.itemsActive[this.props.roomID][this.props.numberLot].selected }

    }
    priceNumber = 1
    zeroPrefix = (str) => {
        return str < 10 ? "0" + str : str;
    }



    numberSelect = () => {
        let getActive = this.props.getCart.itemsActive[this.props.roomID];
        if (!getActive[this.props.numberLot].selected) {


            this.props.setOrder(true)
            if (this.props.typeRoom == 'normal') {
                this.props.addItem(this.props.roomID, this.props.numberLot, this.priceNumber, this.props.typeRoom)
                this.props.addPrice(this.priceNumber)
                getActive[this.props.numberLot].selected = true
                this.props.updateActive(this.props.roomID, getActive)
                // this.props.updateActive(this.props.roomid,)
            }
        }
        else {
            if(this.props.typeRoom == 'normal')
            {

                getActive[this.props.numberLot].selected = false
                this.props.updateActive(this.props.roomID, getActive)
                this.props.delItem(this.props.roomID, this.props.numberLot, this.priceNumber)
            }
        }

        if (this.props.typeRoom == 'collection') {
            let newArr = []
            let startNum = 0
            for (let i = 0; i <= 19; i++) {
                newArr[i] = []
                for (let x = 0; x <= 4; x++) {
                    newArr[i] = [...newArr[i], this.zeroPrefix(startNum)]
                    startNum++
                }
            }
            const findIt = newArr.find((member) => {

                if (member.includes(this.props.numberLot)) {
                    member.map((number) => {
                        // console.log(number);
                        if (!getActive[number].selected) {
                            this.props.addItem(this.props.roomID, number, this.priceNumber, this.props.typeRoom)
                            this.props.addPrice(this.priceNumber)
                            getActive[number].selected = true
                            this.props.updateActive(this.props.roomID, getActive)
                        } else {
                            this.props.delItem(this.props.roomID, number, this.priceNumber)
                            getActive[number].selected = false
                            this.props.updateActive(this.props.roomID, getActive)
                        }
                        // this.props.addItem(this.props.roomID, number, this.priceNumber, this.props.typeRoom)
                        // this.props.addPrice(this.priceNumber)
                        // getActive[number].selected = true
                        // this.props.updateActive(this.props.roomID, getActive)
                    })
                }
            })
        }

    }
    render() {

        return (
            <Button style={{ border: 'none' }} onClick={this.numberSelect.bind(this)} className={this.props.getCart.itemsActive[this.props.roomID][this.props.numberLot].selected ? 'w-20 btndisabled' : 'w-20 btnstyle'}>{this.state.numberLot}</Button>
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
        updateActive: (roomid, data) => {
            dispatch({
                type: "UPDATE_ACTIVE_ITEMS",
                roomid: roomid,
                payload: data
            })
        },
        addPrice: (priceNumber) => {
            dispatch({
                type: "ADD_PRICE",
                priceNumber: priceNumber
            })
        },
        delItem: (parent, number, price) => {
            dispatch({
                type: "REMOVE_ITEM",
                parent: parent,
                number: number,
                price: price
            })
        },
        addItem: (parent, number, price, typeroom) => {
            dispatch({
                type: "ADD_ITEM",
                parent: parent,
                item: number,
                price: price,
                typeroom: typeroom
            })
        },
        setOrder: (showornot) => {
            dispatch({
                type: "ACTIVE_ORDER",
                orderActive: showornot
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);