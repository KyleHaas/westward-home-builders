import React, { Component } from 'react';
import { Spinner, Card, CardDeck} from 'react-bootstrap';
import {getAlbums} from '../../services/AblumService'
import styled from "styled-components";
import './Gallery.css'

class Gallery extends Component {
 
    state = {
        loading: true,
        albums: []
    }

    componentDidMount() {
        // Retrieve the list of ablums available. Then set the 
        // state based on the results.
        getAlbums().then((res) =>{
            this.setState({albums: res, loading: false})
        });
    }

    render() {
        const {albums, loading} = this.state;
        const linkStyle = {
            marginLeft: '15px',
            marginRight: '15px'
        }
        const albumDisplay = albums.map((album, index) =>
        <a href={/gallery/ + album} style={linkStyle}>
            <Card border="light" style={{marginLeft: '0', marginRight: '0'}}>
                <Card.Body>
                    <div>
                        <ion-icon name="images-outline" class="icon thin" ></ion-icon>
                    </div>
                    <div className="serviceText">
                        <Card.Title>{album}</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </a>  
        );
        const loadingDisplay = <Spinner animation="grow" role="status"><span className="sr-only">Loading...</span></Spinner>
        return (
            <>
                {}
                <FlexContainer>
                    <section>
                        <h2 class="section-title mb-2 h1">Gallery</h2>

                        <CardDeck>
                            {loading ? loadingDisplay : albumDisplay}
                        </CardDeck>
                    </section>
                </FlexContainer>
           </>
          )
    }
}  

const FlexContainer = styled.div`
  max-width: 120rem;
 
  margin: auto;
  padding: 2rem 2rem 8rem 2rem;
  width: 100%;
  flex: 1;
`;

export default Gallery