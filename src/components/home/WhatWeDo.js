import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

export default () => (
    <div className="section " >
        <h2>What we do</h2>
        <hr/>
        <Card style={{ width: '35rem' }}>
        <Card.Body>
            <IconContainer>
                <ion-icon name="home-outline"></ion-icon>
            </IconContainer>
            <div className="serviceText">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </div>
        </Card.Body>
        </Card>
    </div>
);

const IconContainer = styled.div`
    

    & ion-icon {
        font-size: 64px;
        --ionicon-stroke-width: 48px;
      }
`;