import React, { Component } from 'react';
import Loading from '../common/Loading/Loading'
import {getAlbums, peekAlbum} from '../../services/AblumService'
import logo from "../../assets/main-logo.jpg";
import './Gallery.css'

class Gallery extends Component {
 
    state = {
        loading: true,
        albums: []
    }

    componentDidMount() {
        const imageUrl = 'https://d2y23heqdij067.cloudfront.net/'
        // Retrieve the list of ablums available. Then set the 
        // state based on the results.
        getAlbums().then((res) =>{
            res.forEach((album) => {
                peekAlbum(album).then((res) =>{
                    let images = res.filter(image => image.match(/\.(jpeg|jpg|gif|png)$/) != null)
                        .map(image => imageUrl + album +'/' + image);
                    var preview;
                    if(images.length > 0) {
                        preview = images[0];
                    } else {
                        preview = logo;
                    }
                    this.setState({ 
                        albums: this.state.albums.concat([{name: album, preview: preview}])
                    })
                });
            });
        }).then( ()=> {
            this.setState({albums: this.state.albums, loading: false});
        });

    }

    render() {
        const {albums, loading} = this.state;
        let albumDisplay = albums.map((album) =>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" key={album.name}>
                <a href={/gallery/ + album.name}>
                    <item class="gallery-item">
                        <img src={album.preview} alt={album.name}/>
                        <caption>
                            <h2>{album.name}</h2>
                            <p>
                                <span>View Gallery</span>
                            </p>
                        </caption>
                    </item>
                </a>    
            </div>
        );
        
        return (
            <>
                <section>
                    <h1 className="section-title mb-2 h1 display-4">Gallery</h1>
                    <div class="grid mt-4">
                        <div className="row">
                            { loading ? <Loading/> : albumDisplay }
                        </div>
                    </div>
                </section>
           </>
          )
    }
}  


export default Gallery