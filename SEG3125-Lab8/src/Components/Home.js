import React from 'react'
import Card from 'react-bootstrap/card';
import jeanmichel from '../images/jeanmichel-basquait.jpg';
import andywarhol from '../images/andy-warhol.jpg';
import wangechimutu from '../images/wangechi-mutu.jpg';
import keithharing from '../images/keith-haring.jpg';
import banksy from '../images/banksy.jpg';
import heart from '../images/heart.png';
import comment from '../images/comment.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home(){
    return (
        <div className='mx-auto'>
            <div className="overflow-content mx-auto">
                <div class="force-overflow mx-auto">
                    <Card style={{width:'22rem'}}>
                        <Card.Header className ="bg-success text-white">Jean-Michel.Basquiat</Card.Header>
                        <Card.Img variant='top' src={jeanmichel}/>
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
                            <Card.Text>Jean-Michel.Basquiat: My latest work. Shoutout Mach-Hommy #PrayForHaiti</Card.Text>
                        </Container>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{width:'22rem'}}>
                        <Card.Header className ="bg-success text-white">AndyWarhol133</Card.Header>
                        <Card.Img variant='top' src={andywarhol}/>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={heart} fluid width="25%"/> 411,126
                                        
                                    </Col>
                                    <Col>
                                        <Image src={comment} fluid width="25%"/> 1,289
                                    </Col>
                                </Row>
                            </Container>
                            <Card.Text>AndyWarhol133: A portrait I did of the beautiful Marilyn Monroe!</Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{width:'22rem'}}>
                        <Card.Header className ="bg-success text-white">Wangechi_Mutu</Card.Header>
                        <Card.Img variant='top' src={wangechimutu}/>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={heart} fluid width="25%"/> 15,000
                                        
                                    </Col>
                                    <Col>
                                        <Image src={comment} fluid width="25%"/> 2,500
                                    </Col>
                                </Row>
                                <Card.Text>Wangechi_Mutu: A beautiful work of art I created in 2009!</Card.Text>
                            </Container>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{width:'22rem'}}>
                        <Card.Header className ="bg-success text-white">Keith.Haring.NYC</Card.Header>
                        <Card.Img variant='top' src={keithharing}/>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={heart} fluid width="25%"/> 7,162
                                        
                                    </Col>
                                    <Col>
                                        <Image src={comment} fluid width="25%"/> 379
                                    </Col>
                                </Row>
                                </Container>
                            <Card.Text>Keith.Haring.NYC: Who do you have when you're feeling down?</Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{width:'22rem'}}>
                        <Card.Header className ="bg-success text-white">banksy_lol</Card.Header>
                        <Card.Img variant='top' src={banksy}/>
                        <Card.Body>
                            <Container>
                            <Row>
                                <Col>
                                    <Image src={heart} fluid width="25%"/> 233
                                </Col>
                                <Col>
                                    <Image src={comment} fluid width="25%"/> 22
                                </Col>
                            </Row>
                                <Card.Text>banksy_lol: Lol</Card.Text>
                            </Container>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>You have viewed everything in your feed... maybe go outside...</p>
                </div>
            </div>
        </div>  
    );
}

export default Home;