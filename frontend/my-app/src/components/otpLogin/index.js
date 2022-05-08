import React, {  useState } from "react";
import { Redirect } from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import otppic from "../restaurentpictures/otp.png"
import password from "../restaurentpictures/password.png"
function OtpLogin() {

  const otp = 123456;
  const [userMobileNo, setUserMobileNo] = useState("")
  const [inp, setInp] = useState(0)


  const submitHandler = (e) => {
    e.preventDefault();

    if(userMobileNo == otp){
      alert("You have Logged in sucessfully");
      return <Redirect to= "/restaurents" />
    }
    else{
      alert("Please enter a valid otp");
    }
  }

  const Handlechange = (e) => {
    setUserMobileNo(e.target.value)
  } 

  return (
    <>
        <Container className="container">
          
            <Row className="row1">

                <Col  className="col2" lg = {8} md={6} sm ={12}>
                   <img src={otppic} style={{width: "900px"}} className="otp" alt="cover" />
                </Col>


                <Col lg={4} md={6} sm={12} className="text-center">
                  <div className="side">
                  <img src={password} className="icon" atl="icon" />
                    <Form className="numform" onSubmit={submitHandler}  action="/OtpLogin">
                        <Form.Group controlId="formBasicEmail ">
                            <Form.Control size="lg" type="text" placeholder="Enter OTP"  name="mobilenumber" id="mobilenumber" onChange={Handlechange}/>
                        </Form.Group>

                        <Button className="btn" variant="success btn-block" type="submit" value="number">
                            Submit
                        </Button>
                    </Form>
                    </div>
                    <div>
                  <a href="#"><small className="re-enter">Re-enter OTP</small></a>
                </div>
                </Col>
                
              
            </Row>
            <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 DAT industries. All Rights Reserved.</h6>
        </Container>
    </>
);

  // return (
  //   <form onSubmit={submitHandler} >
  //   <div className="form-inner">
  //     <label> Enter mobile number </label>
  //     <input type="text" name="mobilenumber" id="mobilenumber" onChange={Handlechange}></input>
  //   </div>
  //   <input type="submit" value="number"></input>
  // </form>  
  
  // )
}

export default OtpLogin;
