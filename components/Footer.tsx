import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <>
      Powered by{" "}
      <span className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/netliheart.svg" alt="Netlify Logo" width={72} height={16} />
      </span>
    </>
  );
}
