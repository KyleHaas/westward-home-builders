import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

export default () => (
    <div className="section " >
        <div className="section-inner" >
            <hr/>
            <h2>Services</h2>
            <CardGroup>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="home-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Custom Homes</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="hammer-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Home Repair</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="bulb-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Electrical/Lighting</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="thermometer-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Heating and Cooling</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="construct-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Custom Homes</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="water-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Plumbing</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                        <i class="fa fa-screwdriver"></i>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Custom Homes</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card border="light">
                    <Card.Body>
                        <IconContainer>
                            <ion-icon name="bulb-outline" class="icon thin" ></ion-icon>
                        </IconContainer>
                        <div className="serviceText">
                            <Card.Title>Custom Homes</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </div>
);

const IconContainer = styled.div`
    

`;