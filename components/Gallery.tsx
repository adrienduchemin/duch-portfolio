import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { LegacyRef } from "react";
import { Item, Gallery as PhotoswipeGallery } from "react-photoswipe-gallery";
import ReactDOMServer from "react-dom/server";
import { IPhoto } from "../pages";
import styles from "./Gallery.module.css";

interface GalleryProps {
  photos: IPhoto[];
}

export default function Gallery({ photos }: GalleryProps) {
  const html = ReactDOMServer.renderToStaticMarkup(
    // use a <img> with loading=lazy
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
        {photos.map(({ data, id, tags, updatedAt }, index) => (
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
            title={`${data.title ? `${data.title} ` : ""} ${
              data.photo.copyright !== null ? `©${data.photo.copyright} ` : ""
            }${
              tags !== undefined && tags.length > 0 ? `#${tags.join(" #")}` : ""
            } `}
          >
            {({ ref, open }) => (
              <picture className={styles.picture}>
                <source
                  srcSet={data.photo[1].url}
                  media={`(min-width: ${data.photo[1].dimensions.width}px)`}
                />
                <source
                  srcSet={data.photo[2].url}
                  media={`(min-width: ${data.photo[2].dimensions.width}px)`}
                />
                <source srcSet={data.photo[3].url} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.img}
                  decoding="async"
                  src={data.photo.url}
                  alt={data.photo.alt ?? ""}
                  loading="lazy"
                  ref={ref as LegacyRef<HTMLImageElement>}
                  onClick={open}
                />
              </picture>
            )}
          </Item>
        ))}
      </PhotoswipeGallery>
    </div>
  );
}
