import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import './CompanyCard.css'


const OptionCard = ({mode, timeLimit, description, bgColor}) => {
  return (
        <Card 
          className='card-body bg-transparent pt-0'
          style={{
            width: '20rem',
            height: '180px'
          }}
        >
          <CardBody className="pt-0">
            <CardTitle className="card-title text-center pb-3" tag='h4'>{mode}</CardTitle>
            <CardText className="text-start">
              <span className="d-block"><b>Details:</b> {description}</span>
              <span className="d-block"><b>Time Limit:</b> {timeLimit}</span>
            </CardText>
          </CardBody>
        </Card>
  )
};


export default OptionCard;