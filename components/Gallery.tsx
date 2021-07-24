import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { MutableRefObject } from "react";
import { Item, Gallery as PhotoswipeGallery } from "react-photoswipe-gallery";
import ReactDOMServer from "react-dom/server";

export default function Gallery() {
  const html = ReactDOMServer.renderToStaticMarkup(
    <div
      style={{
        color: "white",
        display: "flex",
        placeContent: "center",
        flexDirection: "column",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h1>😿</h1>
      There are no kittens :(
    </div>
  );

  return (
    <PhotoswipeGallery
      id="gallery"
      fullscreenButton={true}
      toggleFullscreenButtonCaption=""
      closeButtonCaption=""
      prevButtonCaption=""
      nextButtonCaption=""
      zoomButton={false}
      // zoomButtonCaption=""
      shareButton={false}
      // shareButtonCaption=""
      options={{
        getThumbBoundsFn: undefined,
        bgOpacity: 1,
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
        title="mes petits chatons mes petits chatons mes petits chatons mes petits chatons mes petits chatons"
        key="title2"
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
      <Item id="title3" html={html} key="title3">
        {({ ref, open }) => (
          <a
            ref={ref as MutableRefObject<HTMLAnchorElement>}
            href=""
            onClick={(e) => {
              e.preventDefault();
              open();
            }}
          >
            chat 3
          </a>
        )}
      </Item>
    </PhotoswipeGallery>
  );
}
