import React, { useState } from "react";
import "./Login.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

Login.propTypes = {};

function Login(props) {
  const [usernameMess, setUsernameMess] = useState("");
  const [passwordMess, setPasswordMess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveLogin, setSaveLogin] = useState(false);

  const handleSubmit = (e) => {
    console.log(saveLogin);
    e.preventDefault();
    if (password.length < 6)
      setPasswordMess("Password must be more than 6 characters");
    else setPasswordMess("");
    if (username.length < 6)
      setUsernameMess("Username must be more than 6 characters");
    else setUsernameMess("");
  };

  return (
    <div className="login">
      <Container className="login-inside">
        <h2 className="login-header">LOGIN</h2>
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <Row>
            <input
              type="text"
              className="login-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Row>
          {usernameMess && (
            <Row>
              <span className="login-mess">{usernameMess}</span>
            </Row>
          )}
          <Row>
            <input
              type="text"
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>

          {passwordMess && (
            <Row>
              <span className="login-mess">{passwordMess}</span>
            </Row>
          )}
          <Row>
            <span className="login-label">
              <input
                type="checkbox"
                value={saveLogin}
                onChange={(e) => setSaveLogin(e.target.checked)}
              />{" "}
              Remember me
            </span>
          </Row>
          <Row>
            <Col>
              <Link to="/register">
                <Button className="login-btn" variant="warning">
                  Register
                </Button>
              </Link>
            </Col>
            <Col>
              <Button className="login-btn" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default Login;
