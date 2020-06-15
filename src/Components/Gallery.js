import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import baseUrl from "./../utils/baseUrl";

// const IMAGES = [
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     caption: "Yunus Emre (Sergi #1)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     caption: "Yunus Emre (Sergi #2)",
//   },

//   {
//     src: "https://imgur.com/14zikSp.jpg",
//     thumbnail: "https://imgur.com/14zikSp.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [
//       { value: "Yunus", title: "Yunus" },
//       { value: "Emre", title: "Emre" },
//     ],
//     caption: "Yunus Emre (Sergi #3)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     caption: "Yunus Emre (Sergi #2)",
//   },
// ];

const GalleryGrid = ({ gallery }) => {
  const imagesGallery = gallery.map((item) => {
    const src = baseUrl + item.photo.url;
    const caption = item.caption;
    const thumbnail = baseUrl + item.photo.formats.thumbnail.url;
    const thumbnailWidth = item.photo.formats.thumbnail.width;
    const thumbnailHeight = item.photo.formats.thumbnail.height;
    const tags = [...item.tags];
    return { src, caption, thumbnail, thumbnailHeight, thumbnailWidth, tags };
  });

  return <Gallery images={imagesGallery} />;
};

export default GalleryGrid;
