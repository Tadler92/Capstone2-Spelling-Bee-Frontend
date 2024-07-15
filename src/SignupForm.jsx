
import { useState, useRef } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate, Link } from "react-router-dom";
import './SignupForm.css'


const SignupForm = ({signup}) => {
  const navigate = useNavigate();

  const errRef = useRef();

  const INITIAL_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
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
    console.log('SignupForm formdata', formData);
    const signupData = await signup(formData);
    // console.log('******signupData in SignupForm.jsx', signupData);

    if (signupData.signUp === 'Success') {
      setFormData(INITIAL_STATE);
      navigate('/');
    } else {
      setErrMsg(signupData.signupError[0]);
      // console.log('******signupData in SignupForm.jsx', signupData);
    }
    // setFormData(INITIAL_STATE);
    // navigate('/');
  }

  return (
    <div className="SignupForm">
      <p className="bg-danger h5 py-2" hidden={errMsg ? false : true}>{errMsg}</p>
      
      <h1>Signup</h1>
      <Form className="SignupForm-form mb-3" onSubmit={handleSubmit}>

        <InputGroup className="SignupForm-label">
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
        
        <InputGroup className="SignupForm-label">
          <Label htmlFor="password" className="text-start" sm={12}>
            Password
          </Label>
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

        <InputGroup className="SignupForm-label">
          <Label htmlFor="firstName" className="text-start" sm={12}>
            First Name
          </Label>
          <Input 
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter First Name..."
            value={formData.firstName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="lastName" className="text-start" sm={12}>
            Last Name
          </Label>
          <Input 
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter Last Name..."
            value={formData.lastName}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <InputGroup className="SignupForm-label">
          <Label htmlFor="email" className="text-start" sm={12}>
            Email
          </Label>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Enter email..."
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control form-control-md mb-3"
            required
          />
        </InputGroup>

        <Button className="btn btn-md bg-primary mx-3 px-5">Submit</Button>
        <Link to='/' className="btn btn-md px-5 mx-3 btn-danger">Cancel</Link>
      </Form>
      {/* <Link to='/' className="btn btn-md px-5 btn-danger">Cancel</Link> */}
    </div>
  )
};


export default SignupForm;