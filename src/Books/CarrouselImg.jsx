import React from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function CarrouselImg() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/600/800/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/600/800/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/600/800/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div>
      <div style={{width: "30%", margin: "auto"}}>
        <ImageGallery items = {images}
        showPlayButton = {false}
        showFullscreenButton = {false}
        showThumbnails = {false}
        showBullets = {true}
        autoPlay = {true}
        />
      </div>
    </div>
  );
}
