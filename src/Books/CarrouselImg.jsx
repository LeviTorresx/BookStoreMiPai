import React from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function CarrouselImg() {
  const images = [
    {
      original: "./template.jpeg",
      
    },
    {
      original: "https://picsum.photos/id/1015/600/800/",
      
    },
    {
      original: "https://picsum.photos/id/1019/600/800/",
      
    },
  ];

  return (
    <div style={{zIndex:"1"}}>
      <div style={{width: "100%", margin: "auto"}}>
        <ImageGallery items = {images}
        showPlayButton = {false}
        showFullscreenButton = {false}
        showThumbnails = {false}
        showBullets = {true}
        autoPlay = {true}
        slideDuration= {"800"}
        />
      </div>
    </div>
  );
}
