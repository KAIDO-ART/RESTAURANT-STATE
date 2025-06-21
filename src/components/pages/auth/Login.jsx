import {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";



const Login = () => {
    // declare state
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(email);


    const toggleShow = () => {
      setShow(!show);
    };

    const handleLogin = (e) => {
      e.preventDefault();
      console.log(email, password);
      setEmail("");
      setPassword("");
    }

  return (
    <div className="container mt-5">
      <h1>Login NOW!!</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="Password" />
        </Form.Group>
        <div className="show-hide">
          
            {show ? (<p className="P" onClick={toggleShow}>Hide</p>) : ( <p className="P" onClick={toggleShow}>Show</p>)}
            
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
