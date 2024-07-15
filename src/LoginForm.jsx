import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate, Link } from "react-router-dom";
import './LoginForm.css'


const LoginForm = ({login}) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    username: '',
    password: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const loginData = await login(formData);
    // setFormData(INITIAL_STATE);
    // navigate('/');

    if (loginData.logIn === 'Success') {
      setFormData(INITIAL_STATE);
      navigate('/');
    } else {
      setErrMsg(loginData.loginError[0]);
      // console.log('******signupData in SignupForm.jsx', signupData);
    }
  }

  return (
    <div className="LoginForm">
      <p className="bg-danger h5 py-2" hidden={errMsg ? false : true}>{errMsg}</p>

      <h1>Login</h1>
      <Form className="LoginForm-form mb-3" onSubmit={handleSubmit}>

        <InputGroup className="LoginForm-label">
          <Label htmlFor="username" className="text-start" sm={12}>Username</Label>
          <Input 
            id="username"
            type="text"
            name="username"
            placeholder="Enter username..."
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control form-control-md"
            required
          />
        </InputGroup>
        
        <InputGroup className="LoginForm-label">
          <Label htmlFor="search" className="text-start" sm={12}>Password</Label>
          <Input 
            id="password"
            type="password"
            name="password"
            placeholder="Enter password..."
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <Button className="btn btn-md bg-primary mx-3 px-5">Submit</Button>
        <Link to='/' className="btn btn-md px-5 mx-3 btn-danger">Cancel</Link>
      </Form>
    </div>
  )
};


export default LoginForm;