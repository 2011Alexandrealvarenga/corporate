import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';
import { ProgressBar } from 'react-bootstrap';



export default function AppAbout(){
  const html = 80;
  const responsive = 95;
  const photoshop = 60;
  return(
    <section id='about' className='block about-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>About us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia numquam eveniet, ullam, nihil error quidem ex dolores laborum sed tempore accusamus ad voluptatum doloremque qui pariatur distinctio rerum dolore </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, libero.</p>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}