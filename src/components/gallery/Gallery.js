import React, { Component} from 'react';
import {getAlbums} from '../../services/AblumService'

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
        const albums = this.state.albums.map((album) =>
            <li ><a href={/gallery/ + album}>{album}</a></li>
        );
        return (
            <>
                <div>
                    <h2>{this.state.albums.length}</h2>
                    <ul>
                        {albums}
                    </ul>
                </div>
           </>
          )
    }
}  

export default Gallery