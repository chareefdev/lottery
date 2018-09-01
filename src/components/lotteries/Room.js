import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Room.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect} from "react-router-dom";
import Roomplay from './roomplay/Roomplay';
import Countdown from 'react-countdown-now';
class Room extends Component {
    constructor(props)
    {
        super(props)
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + this.props.expireDay);
        this.state = {playpage:false,roomID:Math.floor(Math.random()*100)+1,coutdown:tomorrow,reward:this.getRandomArbitary(500000,1000000).toLocaleString()}

    }

    getRandomArbitary = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    tomorrow = new Date()
    changePage = () =>
    {
        this.setState({playpage:!this.state.playpage})
    }
    render() {
        return (
            <Col md="4" sm="6">
               {this.state.playpage ? <Roomplay typeRoom={this.props.typeRoom} roomID={this.state.roomID} changePage={this.changePage}/> :null}   
               {/* <Roomplay roomID={this.state.roomID} changePage={this.changePage}/>    */}
                <div className="wrap-room" onClick={this.changePage}>
                    <div className="img-room">
                        <img className="img-self-bg" src={this.props.imgpic}></img>
                        <div className="reward-price-room">
                            รางวัล {this.state.reward} $
                        </div>
                    </div>
                    <div className="text-room d-flex align-items-center">
                        <FontAwesomeIcon style={{fontSize:"20px",marginRight:"10px"}} icon="clock" />
                        <span style={{marginRight:'5px'}}>เหลือเวลาอีก</span>  <Countdown date={this.state.coutdown} />

                    </div>
                </div>
            </Col>
        );
    }
}

export default Room;