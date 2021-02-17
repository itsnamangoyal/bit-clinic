import React, { Component } from "react";
import "./Login.scss"
import {Form , Button } from "react-bootstrap";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="Login">

      
      <Form id = "Login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>   

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
  }
}

export default Login;
