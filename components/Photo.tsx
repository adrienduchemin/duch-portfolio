import styles from "./Photo.module.css";
import { Date as ParseDate } from "prismic-reactjs";
import { Photo } from "../pages";
import Image from "next/image";

interface PhotoProps extends Photo {}

export default function PhotoProps({
  date,
  photo,
  title,
  description,
}: PhotoProps) {
  const dateInDate = ParseDate(date);
  return (
    <div className={styles.photo}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.url} alt="My photo" width={200} />
      <div className={styles.description}>
        {description && description[0].text}
      </div>
      <div className={styles.text}>
        <h2>{title && title[0].text}</h2>
        {dateInDate !== null ? dateInDate.toISOString() : "No date"}
      </div>
    </div>
  );
}
