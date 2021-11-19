
import MyImg1 from './nike1.jpg'
import MyImg2 from './nike2.jpg'
import MyImg3 from './nike3.jpg'
import './Navbarrr.css'
import {Container , Row , Col , Image} from 'react-bootstrap'
function Sport(){
    return(
    <Container>
        <Row className="myImgs">
          <Col >
            <Image src={MyImg1} rounded />
          </Col>
          <Col  >
            <Image src={MyImg2} roundedCircle />
          </Col>
          <Col  >
            <Image src={MyImg3} thumbnail />
          </Col>
        </Row>
      </Container>)
}
export default Sport