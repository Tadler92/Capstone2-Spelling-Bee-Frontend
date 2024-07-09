import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import './GuessedAnswer.css'


const GuessedAnswer = ({guess}) => {
  const INITIAL_STATE = {
    guess: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formData);
    compareWords(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    // <div className="GuessedAnswer border border-danger my-3">
    <div className="GuessedAnswer my-3">
      <p>{guess}</p>
    </div>

    // <Form className="SearchForm mb-3" onSubmit={handleSubmit}>
    //   <Row className="align-items-center">
    //     <Col sm={12}>
    //       <FormGroup>
    //         <Label htmlFor="guess"></Label>
    //         <Input 
    //           id="guess"
    //           type="text"
    //           name="guess"
    //           placeholder="Enter guess for correct word spelling"
    //           value={formData.guess}
    //           onChange={handleChange}
    //           className="p-2"
    //         />
    //       </FormGroup>
    //     </Col>

    //     <Col sm={12}>
    //       <Button className="p-2 bg-success">Submit</Button>
    //     </Col>
    //   </Row>
    // </Form>
  )
};


export default GuessedAnswer;