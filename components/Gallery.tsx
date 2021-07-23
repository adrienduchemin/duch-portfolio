import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { MutableRefObject } from "react";
import { Item, Gallery as PhotoswipeGallery } from "react-photoswipe-gallery";

export default function Gallery() {
  return (
    <PhotoswipeGallery
      id="gallery"
      zoomButton={false}
      fullscreenButton={false}
      shareButton={false}
      options={{
        getThumbBoundsFn: undefined,
      }}
    >
      <Item
        id="title1"
        original="https://placekitten.com/1024/768?image=1"
        height="768"
        width="1024"
      >
        {({ ref, open }) => (
          <a
            ref={ref as MutableRefObject<HTMLAnchorElement>}
            href=""
            onClick={(e) => {
              e.preventDefault();
              open();
            }}
          >
            chat 1
          </a>
        )}
      </Item>
      <Item
        id="title2"
        original="https://placekitten.com/1024/768?image=2"
        height="768"
        width="1024"
        title="mes petits chatons"
      >
        {({ ref, open }) => (
          <a
            ref={ref as MutableRefObject<HTMLAnchorElement>}
            href=""
            onClick={(e) => {
              e.preventDefault();
              open();
            }}
          >
            chat 2
          </a>
        )}
      </Item>
    </PhotoswipeGallery>
  );
}
