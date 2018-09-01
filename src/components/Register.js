import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormProps, Label, Input, FormFeedback, FormText, FormGroup
} from 'reactstrap';

import './Register.css';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailFail: false,
            passFail: false,
            userFail: false,
            input: {
                user:'',
                email:'',
                pass:''
            }
        }
    }
    setVa = (fieldErr,fieldName,statusField,inputdata) =>{
        return {
            ...this.state,
            [fieldErr]: statusField,
            input:{
                ...this.state.input,
                [fieldName]:inputdata
            }
        }
    }
    userV = (e) => {
        if (e.target.value.length <= 6) {
            this.setState(this.setVa('userFail','user',true,e.target.value))
        } else {
            this.setState(this.setVa('userFail','user',false,e.target.value))
        }
    }
    emailV = (e) =>{
        let  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(emailPattern.test(e.target.value)){
            this.setState(this.setVa('emailFail','email',false,e.target.value))
        }else{
            this.setState(this.setVa('emailFail','email',true,e.target.value))
        }
    }
    passV = (e) => {
        if (e.target.value.length < 8) {
            this.setState(this.setVa('passFail','pass',true,e.target.value))
        } else {
            this.setState(this.setVa('passFail','pass',false,e.target.value))
        }
    }
    onSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div className="wrap-register d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }}>
                <Card style={{ minWidth: '320px' }}>
                    <CardBody>
                        {/* <Form> */}
                        <FormGroup>
                            <Label for="exampleEmail">ชื่อผู้ใช้</Label>
                            <Input onChange={this.userV.bind(this)} value={this.state.input.user} invalid={this.state.userFail} />
                            <FormFeedback>ต้องมากกว่า 6 ตัว</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">อีเมล</Label>
                            <Input onChange={this.emailV.bind(this)} value={this.state.input.email} invalid={this.state.emailFail} />
                            <FormFeedback>รูปแบบ Email ไม่ถูกต้อง</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">รหัสผ่าน</Label>
                            <Input onChange={this.passV.bind(this)} value={this.state.input.pass}  value={this.state.input.pass} invalid={this.state.passFail} />
                            <FormFeedback>ต้องมากกว่า 8 ตัว</FormFeedback>
                        </FormGroup>
                        <Button onClick={this.onSubmit.bind(this)} color="primary" size="lg" block>สมัครสมาชิก</Button>
                        {/* </Form> */}
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default Register;