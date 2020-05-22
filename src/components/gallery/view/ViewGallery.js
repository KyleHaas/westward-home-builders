import React, { Component } from 'react';
import { photos } from "./photos";
import PhotoGallery from "./PhotoGallery";
import {viewAlbum} from '../../../services/AblumService'
import Carousel, { Modal, ModalGateway } from "react-images";

class ViewGallery extends Component {

    state = {
        albumName: null,
        images: []
    }

    componentDidMount () {
        // Retrieve the list of ablums available. Then set the 
        // state based on the results.
        let albumName = this.props.album;
        viewAlbum(albumName).then((res) =>{
            this.setState({images: res, albumName : albumName})
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.albumName}</p>
                <PhotoGallery images={this.state.images}></PhotoGallery>
            </div>
        )
    }
}  

export default ViewGallery