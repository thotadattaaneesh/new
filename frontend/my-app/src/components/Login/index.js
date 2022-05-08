// This form is used by the user to login to the account.
import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import userlogo from "../restaurentpictures/fork.png"
import cover from "../restaurentpictures/cover.png"

import "./index.css"
function Login() {
  const submitHandler =() => {
    alert("Please Enter otp you have recieved");
  }
  return (
    <>
        <Container className="container">
          
            <Row className="row1">
                <Col lg={4} md={6} sm={12} className="text-center">
                  <div className="side">
                  <img src={userlogo} className="icon" atl="icon" />
                    <Form className="numform" onSubmit={submitHandler} action="/OtpLogin">
                        <Form.Group controlId="formBasicEmail ">
                            <Form.Control size="lg" type="text" placeholder="Enter Mobile number" />
                        </Form.Group>

                        <Button className="btn" variant="success btn-block" type="submit" value="number">
                            Submit
                        </Button>
                    </Form>
                    </div>
                    <div>
                  <a href="#"><small className="re-enter">Re-enter MobileNumber</small></a>
                </div>
                </Col>
                <Col  className="col2" lg = {8} md={6} sm ={12}>
                  <img src={cover} className= "cover" alt="cover"></img>
                </Col>
              
            </Row>
            <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 DAT industries. All Rights Reserved.</h6>
        </Container>
    </>
);
};

export default Login;
