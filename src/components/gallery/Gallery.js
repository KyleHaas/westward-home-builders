import React, { Component , Link } from 'react';
import { Spinner, Card, CardDeck} from 'react-bootstrap';
import {getAlbums} from '../../services/AblumService'
import styled from "styled-components";

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
                    <h2>Galleries</h2>
                    <hr/>
                    <CardDeck>
                        {loading ? loadingDisplay : albumDisplay}
                    </CardDeck>
                </FlexContainer>
           </>
          )
    }
}  

const FlexContainer = styled.div`
  max-width: 120rem;

  margin: auto;
  padding: 2rem 2rem 8rem 2rem;

`;

export default Gallery