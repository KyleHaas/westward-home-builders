import React, { Component } from 'react';
import { photos } from "./photos";
import PhotoGallery from "./PhotoGallery";
import {viewAlbum} from '../../../services/AblumService'
import Carousel, { Modal, ModalGateway } from "react-images";

class ViewGallery extends Component {

    state = {
         album: null
    }

    getImages (albumName){
        return viewAlbum(albumName);
    }

    componentDidMount () {
    }
    render() {
        const album = this.props.album;
        const images = this.getImages(album);
        return(
            <div>
                <p>{album}</p>
                <PhotoGallery images={images}></PhotoGallery>
            </div>
        )
    }
}  

export default ViewGallery