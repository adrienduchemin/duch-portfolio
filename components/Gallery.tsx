import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { MutableRefObject } from "react";
import { Item, Gallery as PhotoswipeGallery } from "react-photoswipe-gallery";
import ReactDOMServer from "react-dom/server";
// import Imgix from "react-imgix";
import { IPhoto } from "../pages";
import styles from "./Gallery.module.css";
// import Image from "next/image";

interface GalleryProps {
  photos: IPhoto[];
}

export default function Gallery({ photos }: GalleryProps) {
  const html = ReactDOMServer.renderToStaticMarkup(
    //     <Imgix
    //   src="https://assets.imgix.net/examples/pione.jpg"
    //   width={100} // This sets what resolution the component should load from the CDN and the size of the resulting image
    //   height={200}
    // />;
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
    <div className={styles.container}>
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
        {photos.map(({ data, id, updatedAt }) => (
          //   <Item
          //   key={uid}
          //   html={html} // this should do the whole img original/width/height with imgix + title etc
          //   id={uid}
          // >
          <Item
            key={`slider-${id}`}
            id={id}
            original={data.photo.url}
            height={data.photo.dimensions.height}
            width={data.photo.dimensions.width}
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
                <picture>
                  <source
                    srcSet="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=1280"
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcSet="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=768&h=1024&fit=crop"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=568&h=320&fit=crop"
                    media="(min-width: 480px)"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=320&h=568&fit=crop"
                    alt=""
                    loading="lazy"
                  />
                </picture>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                src="small.jpg"
                srcSet={`${data.photo[1].url} 1024w, ${data.photo[2].url} 640w, ${data.photo[3].url} 320w`}
                sizes="33.3vw"
                alt={data.photo.alt ?? ""}
              /> */}
                {/* <Imgix
                htmlAttributes={{ alt: data.photo.alt ?? "dancing" }}
                key={`gallery-${uid}`}
                sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={data.photo[1].url}
              /> */}
              </a>
            )}
          </Item>
        ))}
      </PhotoswipeGallery>
    </div>
  );
}
