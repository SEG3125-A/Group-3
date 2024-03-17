import React from 'react';
import "./Profile.css";
import { Card, Button, Container, Row, Col , Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

import jeanmichel from '../images/jeanmichel-basquait.jpg';
// import andywarhol from '../images/andy-warhol.jpg';
// import wangechimutu from '../images/wangechi-mutu.jpg';
// import keithharing from '../images/keith-haring.jpg';
// import banksy from '../images/banksy.jpg';
import emptyProfile from "../images/emptyProfile.png";
import heart from '../images/heart.png';
import comment from '../images/comment.png';
import devil from '../images/basquiatArt/devil.jpeg';
import samo from '../images/basquiatArt/samo.jpeg';
import strokes from '../images/basquiatArt/strokes.jpeg';
import angel from '../images/basquiatArt/angel.jpeg';
import warrior from '../images/basquiatArt/warrior.jpeg';

// Profile component of website
// To be developed

function Profile() {
	return (
		<Container className="mt-5">
		<Row>
		  <Col md={4}>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={emptyProfile} />
			  <Card.Body>
				<Card.Title>Jean-Michel.Basquiat</Card.Title>
				<Card.Text>
				  Believe it or not, I can actually draw
				</Card.Text>
				<Button variant="primary">Edit Profile</Button>
			  </Card.Body>
			</Card>
		  </Col>
		  <Col md={8}>
			<h3>Artworks</h3>
			<Row>
			  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={jeanmichel} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 899,378
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 6,500
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: My latest work. Shoutout Mach-Hommy #PrayForHaiti
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
			  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={samo} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 653,234
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 5,643
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: Life is confusing #SAMO
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
			  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={devil} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 2,999,324
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 9,340
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: I paint the way I feel not the way I look #money
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
			  {/* Repeat for more artworks */}
			</Row>
		  </Col>
		  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={strokes} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/>  746,305
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 5,657
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: Shoutout the strokes #TheNewAbnormal
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
			  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={angel} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 2,632,024
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 20,532
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: All art is beautiful
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
			  <Col md={6} lg={4} className="mb-4">
				<Card>
				  <Card.Img variant="top" src={warrior} />
				  <Card.Body>
					<Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 1,009,208
                                    
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 50,320
                                </Col>
                            </Row>
                    </Container>
					<Card.Text>
					Jean-Michel.Basquiat: It's not who you are that holds you back its who you think you're not #believeinyourself
					</Card.Text>
				  </Card.Body>
				</Card>
			  </Col>
		</Row>
	  </Container>
	);
  }

export default Profile;