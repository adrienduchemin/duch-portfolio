import { GetStaticProps } from 'next';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import util from 'util';

import styles from '@styles/about.module.css';
import { client } from '@utils/prismic';

interface IPage {
  data: IPageData;
}

interface IPageData {
  photo: {
    url: string;
  };
  instagram: {
    url: string;
  };
  title: [
    {
      text: string;
    },
  ];
  description: RichTextBlock[];
}

interface AboutProps {
  data: IPageData;
}

export default function About({
  data: { photo, description, instagram, title },
}: AboutProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imgCropper}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={photo.url} className={styles.img} />
      </div>

      <a href={instagram.url} target="_blank" rel="noreferrer">
        {/* a remplacer par le svg d'insta */}
        Instagram
      </a>
      <p>{title[0].text}</p>
      <RichText render={description} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const { data } = await getPage();

  return {
    props: {
      data,
    },
  };
};

const getPage = async (): Promise<IPage> => {
  const { data } = await client.getSingle('about', { lang: 'fr-fr' });

  console.log(util.inspect(data, false, null, true));
  return {
    data: data as IPageData,
  };
};
