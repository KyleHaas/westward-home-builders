import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

  
function PhotoGallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    let images = props.images.map(function(image) {
        return {width:5, height: 4, src:image}
    });
    return (    
        <div className="container" style={{marginTop: '5rem'}}>
            <Gallery photos={images} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal  onClose={closeLightbox} >
                    <Carousel
                    modalProps= {{preventScroll:false}}
                    currentIndex={currentImage}
                    views={images.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )

}

export default PhotoGallery