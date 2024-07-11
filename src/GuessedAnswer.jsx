import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup } from "reactstrap";
import './GuessedAnswer.css'


const GuessedAnswer = ({guess, correct}) => {
  const [correctClass, setCorrectClass] = useState({
    trueText: "GuessedAnswer my-3 bg-success",
    falseText: "GuessedAnswer my-3 bg-danger",
  });

  if (correct === null) {
    correctClass['falseText'] = "GuessedAnswer my-3"
  } else {
    correctClass['falseText'] = "GuessedAnswer my-3 bg-danger"
  };

  return (
    // <div className="GuessedAnswer border border-danger my-3">
    // <div className="GuessedAnswer my-3">
    <div className={correct ?
      correctClass['trueText'] :
      correctClass['falseText']
    }>
      {/* <p className={correct ? "GuessedAnswer-correct" : "GuessedAnswer-incorrect"}> */}
      {/* <p className={correct ? 
        "text-success pt-1" : 
        "text-danger pt-1"
      }> */}
      <p className='pt-1'>
        {guess}
      </p>
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