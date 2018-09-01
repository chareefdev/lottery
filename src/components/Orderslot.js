import React, { Component } from 'react';
import { Spring, Transition, animated, AnimatedValue } from 'react-spring'
import './Orderslot.css'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom'

class Orderslot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
        };
        // this.removeItem = _.debounce(this.removeItem,1000)
    }



    toggleShow = () => {
        this.setState({ visible: !this.props.getCart.orderActive })
        this.props.setOrder(!this.props.getCart.orderActive) // set status active panel in redux for another componet to access status
    }

    removeItemS = (parentid) => {

        this.props.emptyArray(parentid)
        let getActive = this.props.getCart.itemsActive[parentid]
        Object.keys(getActive).map((index) => {
            getActive[index].selected = false
        })
        this.props.updateActive(parentid, getActive)
    }

    removeItem = (parentid, number, price, numbertype) => {
        if (numbertype == 'normal') {
            this.props.delItem(parentid, number, price)
            this.getActive = this.props.getCart.itemsActive[parentid]
            this.getActive[number].selected = false
            this.props.updateActive(parentid, this.getActive)
        }
        if (numbertype == 'collection') {
            let newArr = []
            let startNum = 0
            //create array for easy to compare number where it between
            for (let i = 0; i <= 19; i++) {
                newArr[i] = []
                for (let x = 0; x <= 4; x++) {
                    newArr[i] = [...newArr[i], this.zeroPrefix(startNum)]
                    startNum++
                }
            }
            let getActive = this.props.getCart.itemsActive[parentid];

            const fideSibiling = newArr.find((member) => {
                if (member.includes(number)) {
                    member.map((key) => {
                        //loop for get each price 
                        Object.entries(this.props.getCart.items[parentid]).map((s) => {
                            if (s[1].numberPick == key) {
                                //del item from redux
                                this.props.delItem(parentid, key, s[1].numberPrice)
                            }
                        })
                        //change key active btn = false
                        getActive[key].selected = false
                    })
                    //update redux store key active
                    this.props.updateActive(parentid, getActive)
                }
            })
        }
    }

    zeroPrefix = (str) => {
        return str < 10 ? "0" + str : str;
    }



    render() {
        return (
            <div className="wrap-order">



                <Spring style={{ overflowY: 'auto' }} force from={{ height: 0 }} to={{ height: this.props.getCart.orderActive ? 'auto' : 0 }}>
                    {styles => <div style={styles} className="wrap-order-list">



                        <div className="wrap-card">
                            {Object.keys(this.props.getCart.items).map((parentID) => {
                                return (
                                    <Card className="cardsList">
                                        <CardHeader style={{ paddingTop: '5px', paddingBottom: '5px', paddingLeft: '15px' }}>
                                            ชุดที่ {parentID} 
                                            <span style={{ float: 'right' }}>
                                                <FontAwesomeIcon onClick={this.removeItemS.bind(this, parentID)} icon="times-circle" />
                                            </span>
                                        </CardHeader>
                                        <CardBody style={{ padding: '10px', paddingLeft: '15px' }}>
                                            {
                                                this.props.getCart.items[parentID].map((itemChild) =>

                                                    <span>
                                                        <Button onClick={this.removeItem.bind(this, parentID, itemChild.numberPick, itemChild.numberPrice, itemChild.numberType)} style={{ border: 'none', marginBottom: '10px', marginRight: '10px', outline: '0' }} className="lotbtn">
                                                            {itemChild.numberPick}
                                                        </Button>
                                                    </span>

                                                )
                                            }
                                        </CardBody>
                                    </Card>
                                )
                            }
                            )}
                        </div>
                        <div>
                            <Card className="cardsList">
                                <CardBody style={{ textAlign: 'center' }}>
                                    รวมทั้งหมด {this.props.getCart.sumPrice}  บาท
                                </CardBody>
                            </Card>
                        </div>
                    </div>}


                </Spring>
                <div className="panel-order" onClick={this.toggleShow}>
                    <FontAwesomeIcon style={{marginRight:'5px'}} icon="shopping-cart" /> ชำระเงินตรงนี้
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
const mapDispatchToProps = (dispatch) => {
    return {
        updateActive: (roomid, data) => {
            dispatch({
                type: "UPDATE_ACTIVE_ITEMS",
                roomid: roomid,
                payload: data
            })
        },
        emptyArray: (parent) => {
            dispatch({
                type: "EMPTY_ARRAY",
                parent: parent
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
        setOrder: (showornot) => {
            dispatch({
                type: "ACTIVE_ORDER",
                orderActive: showornot
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orderslot);