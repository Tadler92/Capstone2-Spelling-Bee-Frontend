import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import { Navigate, useNavigate, Link } from "react-router-dom";
import './NewWordForm.css'


const NewWordForm = ({addWord}) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    word: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

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
    const wordData = await addWord(formData);
    // setFormData(INITIAL_STATE);
    // navigate('/');

    if (wordData.wordAdded === 'Success') {
      setSuccessMsg(`Successfully added word: ${formData.word}`)
      setFormData(INITIAL_STATE);
      // navigate('/');
    } else {
      setErrMsg(wordData.addingError[0]);
      // console.log('******signupData in SignupForm.jsx', signupData);
    }
  }

  return (
    <div className="NewWordForm">
      <p className="bg-danger h5 py-2" hidden={errMsg ? false : true}>{errMsg}</p>
      <p className="bg-success h5 py-2" hidden={successMsg ? false : true}>{successMsg}</p>

      <h1>Add New Word</h1>
      <Form className="LoginForm-form mb-3" onSubmit={handleSubmit}>

        <InputGroup className="LoginForm-label mb-3">
          <Label htmlFor="word" className="text-start" sm={12}>New Word To Add:</Label>
          <Input 
            id="word"
            type="text"
            name="word"
            placeholder="Enter a new word"
            autoComplete="word"
            value={formData.word}
            onChange={handleChange}
            className="form-control form-control-md"
            required
          />
        </InputGroup>
        
        {/* <InputGroup className="LoginForm-label">
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
        </InputGroup> */}

        <Button className="btn btn-md bg-primary mx-3 px-5">Submit</Button>
        <Link to='/' className="btn btn-md px-5 mx-3 btn-danger">Cancel</Link>
      </Form>
    </div>
  )
};


export default NewWordForm;