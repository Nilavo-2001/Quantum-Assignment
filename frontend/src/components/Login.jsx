import React, { useContext, useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { error, warning } from "../utils/toasts";
import axios from "axios";
import { userContext } from "../context/UserProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useContext(userContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Called");
    if (!email || !password) {
      warning("Please fill all the fields");
      return;
    }

    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios.request(config);

      if (response.status == 200) {
        const { data } = response.data;
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      const { response } = err;
      if (response && response.data && response.data.message)
        error(response.data.message);
      else console.error(err.message);
    }

    //console.log(response);
  };

  return (
    <div className="login-form">
      <Container className="d-flex justify-content-center align-items-center login-container">
        <Card className="login-card">
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={submitHandler}>
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

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <div className="text-center mt-3">
                <a href="/signup" className="signup-link">
                  New user? Sign up
                </a>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginForm;
