import { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import CurrUserContext from "./CurrUserContext";


const SpellWordForm = ({compareWords}) => {
  const INITIAL_STATE = {
    guess: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const {dailyWord} = useContext(CurrUserContext);

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
    compareWords(formData.guess);
    setFormData(INITIAL_STATE);
  }

  return (
    <Form className="SearchForm mb-3" onSubmit={handleSubmit}>
      {/* <Row className="row-cols-lg-auto align-items-center"> */}
      <Row className="align-items-center">
        <Col sm={12}>
          <FormGroup>
            <Label htmlFor="guess"></Label>
            <Input 
              id="guess"
              type="text"
              name="guess"
              placeholder="Enter guess for correct word spelling"
              value={formData.guess}
              onChange={handleChange}
              className="p-2"
              // disabled={dailyWord['complete'] ? true : false}
            />
          </FormGroup>
        </Col>

        <Col sm={12}>
          <Button 
            className="p-2 bg-success"
            // disabled={dailyWord['complete'] ? true : false}
          >
            Submit
          </Button>
        </Col>
      </Row>

      {/* <InputGroup className="flex-col">
        <Label htmlFor="guess"></Label>
        <Input 
          id="guess"
          type="text"
          name="guess"
          placeholder="Enter guess for correct word spelling"
          value={formData.guess}
          onChange={handleChange}
          className="form-control form-control-lg"
        />
        <Button className="btn btn-lg bg-primary">Submit</Button>
      </InputGroup> */}
    </Form>
  )
};


export default SpellWordForm;