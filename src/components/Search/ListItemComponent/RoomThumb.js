import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class RoomThumbs extends React.Component {

  render() {

    const images = [
        {
            original: 'https://picsum.photos/id/164/1000/600/',
            thumbnail: 'https://picsum.photos/id/164/250/150/',
            },
            {
            original: 'https://picsum.photos/id/10/1000/600/',
            thumbnail: 'https://picsum.photos/id/10/250/150/',
            },
            {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            // {
            // original: 'https://picsum.photos/id/155/1000/600/',
            // thumbnail: 'https://picsum.photos/id/155/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/214/1000/600/',
            // thumbnail: 'https://picsum.photos/id/214/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/221/1000/600/',
            // thumbnail: 'https://picsum.photos/id/221/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/274/1000/600/',
            // thumbnail: 'https://picsum.photos/id/274/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/100/1000/600/',
            // thumbnail: 'https://picsum.photos/id/100/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/142/1000/600/',
            // thumbnail: 'https://picsum.photos/id/142/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/1019/1000/600/',
            // thumbnail: 'https://picsum.photos/id/1019/250/150/',
            // },
            // {
            // original: 'https://picsum.photos/id/308/1000/600/',
            // thumbnail: 'https://picsum.photos/id/308/250/150/',
            // },
    ]

    return (
      <ImageGallery items={images} lazyLoad={true} infinite={false} showNav={false} showBullets={false} showFullscreenButton={true} showPlayButton={false} slideOnThumbnailOver={true} showIndex={false} useBrowserFullscreen={false} />
    );
  }

}
export default RoomThumbs;