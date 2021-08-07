import { GetStaticProps } from 'next';
import { useCallback, useState } from 'react';

import Gallery from '@components/Gallery';
import Tags from '@components/Tags';
import { SettingTag } from '@interfaces/SettingTag';
import styles from '@styles/index.module.css';
import { client } from '@utils/prismic';

import { IGalleryItem, IGalleryItemData } from '../interfaces/GalleryItem';
// import util from 'util';

interface IPage {
  data: IPageData;
}

interface IPageData {
  // gallery
  photos: [
    {
      // galleryItem
      photo: {
        id: string;
        tags: string[];
      };
    },
  ];
}

interface HomeProps {
  galleryItems: IGalleryItem[];
  allTags: string[];
}

export default function Home({
  galleryItems,
  allTags,
}: HomeProps): JSX.Element {
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [currentSettingTags, setCurrentSettingTags] = useState<SettingTag[]>(
    [],
  );
  const [isFiltering, setIsFiltering] = useState(false);

  const toogleSettingTag = useCallback((tag: SettingTag) => {
    setCurrentSettingTags((previousTags) =>
      previousTags.includes(tag)
        ? previousTags.filter((previousTag) => previousTag !== tag)
        : [...previousTags, tag],
    );
  }, []);

  const toogleTag = useCallback((tag: string) => {
    setCurrentTags((previousTags) =>
      previousTags.includes(tag)
        ? previousTags.filter((previousTag) => previousTag !== tag)
        : [...previousTags, tag],
    );
  }, []);

  const toogleFilter = useCallback(() => {
    setIsFiltering((previousIsFiltering) => !previousIsFiltering);
  }, []);

  const resetTags = useCallback(() => {
    setCurrentTags([]);
    setCurrentSettingTags([]);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.filter}
        onClick={toogleFilter}
        onKeyPress={toogleFilter}
        role="button"
        tabIndex={0}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/filter.svg" height={28} width={28} alt="filter" />
      </div>
      {isFiltering && (
        <Tags
          allTags={allTags}
          resetTags={resetTags}
          currentTags={currentTags}
          currentSettingTags={currentSettingTags}
          toogleTag={toogleTag}
          toogleSettingTag={toogleSettingTag}
        />
      )}
      <Gallery
        currentTags={currentTags}
        currentSettingTags={currentSettingTags}
        items={galleryItems}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allTags: string[] = [];
  const { data } = await getPage();
  const galleryItems = await getGalleryItems(data, allTags);

  return {
    props: {
      galleryItems,
      allTags: [...new Set(allTags)].sort(),
    },
  };
};

const getPage = async (): Promise<IPage> => {
  const { data } = await client.getSingle('portfolio', { lang: 'fr-fr' });

  // console.log(util.inspect(data, false, null, true));
  return {
    data: data as IPageData,
  };
};

// photos => gallery
const getGalleryItems = async (
  { photos }: IPageData,
  allTags: string[],
): Promise<IGalleryItem[]> =>
  Promise.all(
    // photos => gallery et photo => galleryItem
    photos.map(async ({ photo }) => {
      const {
        data,
        id,
        tags,
        last_publication_date: updatedAt,
        // photo => galleryItem
      } = await client.getByID(photo.id, {
        lang: 'fr-fr',
      });

      // photo => galleryItem
      allTags.push(...photo.tags);

      return {
        data: data as IGalleryItemData,
        id,
        tags,
        updatedAt: updatedAt as string,
      };
    }),
  );
