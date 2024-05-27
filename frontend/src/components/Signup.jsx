import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/SignupForm.css";
import axios from "axios";
import { error, warning } from "../utils/toasts";
import { userContext } from "../context/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContext(userContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Called");
    if (!name || !email || !dob || !password || !confirmpassword) {
      warning("Please fill all the fields");
      return;
    }

    if (password != confirmpassword) {
      error("Password and Confirm Password are different");
      return;
    }

    let data = JSON.stringify({
      name,
      email,
      dob,
      password,
      confirmpassword,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setLoading(true);
    try {
      const response = await axios.request(config);
      setLoading(false);
      if (response.status == 200) {
        const { data } = response.data;
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      const { response } = err;
      if (response && response.data && response.data.message)
        error(response.data.message);
      else console.error(err.message);
    }

    //console.log(response);
  };

  return (
    <div className="sign-up-form">
      <Container className="d-flex justify-content-center align-items-center signup-container">
        <Card className="signup-card">
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => {
                    setConfirmpassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                {loading ? <Spinner variant="light" size="sm" /> : "Sign Up"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SignupForm;
