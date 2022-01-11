import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import accountApi from "../../api/account";
import "./Register.css";

Register.propTypes = {};

function Register(props) {
  const [usernameMess, setUsernameMess] = useState("");
  const [passwordMess, setPasswordMess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [fullnameMess, setFullnameMess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 6)
      setUsernameMess("Username must be more than 6 characters");
    if (password.length < 6)
      setPasswordMess("Password must be more than 6 characters");
    if (fullname.length < 6)
      setFullnameMess("Fullname must be more than 6 characters");

    const data = {
      fullname,
      password,
      username,
      birthday,
    };

    if (username.length >= 6 && password.length >= 6 && fullname.length > 6)
      accountApi
        .register(data)
        .then((res) => {
          console.log(res);
          setUsernameMess("");
          setPasswordMess("");
          setFullnameMess("");
          setFullname("");
          setBirthday("");
          setUsername("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="login">
      <Container className="login-inside">
        <h2 className="login-header">REGISTER</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <Row>
            <input
              type="text"
              className="login-input"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Row>
          {fullnameMess && (
            <Row>
              <span className="login-mess">{fullnameMess}</span>
            </Row>
          )}
          <Row>
            <input
              type="date"
              className="login-input"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Row>
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
            <Col>
              <Link to="/login">
                <Button className="login-btn" variant="warning">
                  Login
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

export default Register;
