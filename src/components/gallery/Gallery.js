import React, { Component, useState, useCallback } from 'react';
import {getAlbums} from '../../services/AblumService'
import ViewGallery from './view/ViewGallery'

class Gallery extends Component {
 
    state = {
        albums: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState({albums: getAlbums() });
    }

    render() {
        return (
            <>
                <div>
                    <h2>{this.state.albums.size}</h2>
                </div>
           </>
          )
    }
}  

export default Gallery