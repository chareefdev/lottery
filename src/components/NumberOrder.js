import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import './NumberOrder.css'
import { connect } from 'react-redux';
class NumberOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentID:this.props.parentID,
            itemChild:this.props.itemChild,
            numberPick:this.props.numberPick,
            numberPrice:this.props.numberPrice
        }
    }
    // removeItem = (parentid, number, price) => {
    //     this.props.delItem(parentid, number, price)

    // }

    render() {
        return (
            // <span>
            //     <button onMouseEnter={this.mouseE.bind(this,itemChild.numberPick)} 
            // onClick={this.removeItem.bind(this,parentID,itemChild.numberPick,itemChild.numberPrice)} style={{marginBottom:'10px',marginRight:'10px'}} className="lotbtn">
            //         <b></b>{itemChild.numberPick}
            //     </button>
            // </span>

            <span>
                {/* <button onClick={this.removeItem.bind(this,this.state.parentID,this.state.numberPick,this.state.numberPrice)} style={{ marginBottom: '10px', marginRight: '10px' }} className="lotbtn"> */}
                <button onClick={this.props.removeItem.bind(this,this.state.parentID,this.state.numberPick,this.state.numberPrice)} style={{ marginBottom: '10px', marginRight: '10px' }} className="lotbtn">
                    {this.props.itemChild.numberPick}
                </button>
            </span>
        );
    }
}

export default connect(NumberOrder);