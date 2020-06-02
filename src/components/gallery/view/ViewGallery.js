import React, { Component } from 'react';
import PhotoGallery from "./PhotoGallery";
import {viewAlbum} from '../../../services/AblumService'

class ViewGallery extends Component {

    state = {
        albumName: null,
        images: []
    }

    componentDidMount () {
        console.log('calling aws')
        const imageUrl = 'https://d2y23heqdij067.cloudfront.net/'
        // Retrieve the list of ablums available. Then set the 
        // state based on the results.
        let albumName = this.props.album;
        viewAlbum(albumName).then((res) =>{
            let images = res.filter(image => image.match(/\.(jpeg|jpg|gif|png)$/) != null)
                .map(image => imageUrl + albumName +'/' + image);
            this.setState({images: images, albumName : albumName})
        });
        
    }
    render() {
        return(
            <div className="flex-container">
                <section>
                    <h1 class="section-title mb-2 h1 display-4">{this.state.albumName}</h1>
                    <PhotoGallery images={this.state.images}></PhotoGallery>
                </section>
            </div>
        )
    }
}  

export default ViewGallery

