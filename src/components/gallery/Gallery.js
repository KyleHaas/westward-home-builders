import React, { Component, useState, useCallback } from 'react';
import {getAlbums} from '../../services/AblumService'
import ViewGallery from './view/ViewGallery'

class Gallery extends Component {
 
    state = {
        albums: []
    }

    componentDidMount() {
        // Retrieve the list of ablums available. Then set the 
        // state based on the results.
        getAlbums().then((res) =>{
            this.setState({albums: res})
        });
    }

    render() {
        return (
            <>
                <div>
                    <h2>{this.state.albums.length}</h2>
                </div>
           </>
          )
    }
}  

export default Gallery