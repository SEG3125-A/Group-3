import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import hideo from '../images/hideo.jpg';
import heart from '../images/heart.png';
import comment from '../images/comment.png';
import yuto from '../images/yuto.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(){
  return (
    <div className='mx-auto'>
      <h1>Gallery</h1>
      <h2>Featured Posts</h2>
      <div className="overflow-content mx-auto">
        <div class="force-overflow mx-auto">
          <Container>
            <div className='card-container'>
              <Card className='card'>
                <Card.Header className ="bg-success text-white">Hideo_Kojima</Card.Header>
                <Card.Img variant='top' src={hideo}/>
                <Card.Body>
                  <Container>
                    <Row lg = {3}>
                      <Col>
                        <Image src={heart} fluid width="25%"/> 1,000,000
                      </Col>
                      <Col>
                        <Image src={comment} fluid width="25%"/> 10,000
                      </Col>
                    </Row>
                    <Card.Text>Hideo_Kojima: art....</Card.Text>
                  </Container>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card className='card'>
                <Card.Header className ="bg-success text-white">YutoSuzuki23</Card.Header>
                <Card.Img variant='top' src={yuto}/>
                <Card.Body>
                  <Container>
                    <Row lg= {3}>
                      <Col>
                        <Image src={heart} fluid width="25%"/> 1,000,000
                      </Col>
                      <Col>
                        <Image src={comment} fluid width="25%"/> 10,000
                      </Col>
                    </Row>
                    <Card.Text>YutoSuzuki23: Old Man Takamura... some spoilers for the next chapter!</Card.Text>
                  </Container>
                </Card.Body>
              </Card>
            </div>
          </Container>
          <br></br>
          <p>pick up a pen</p>
        </div>
      </div>
    </div>  
  );
}

export default Gallery;