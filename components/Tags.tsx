import styles from './Tags.module.css';

// import { Date as ParseDate } from 'prismic-reactjs';

interface TagsProps {
  toogleTag: (tag: string) => void;
  currentTags: string[];
  allTags: string[];
}

export default function Tags({
  toogleTag,
  allTags,
  currentTags,
}: TagsProps): JSX.Element {
  return (
    <div className={styles.tags}>
      {allTags.map((tag) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className={`${styles.tag ?? ''} ${
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            currentTags.includes(tag) ? styles.tagSelected! : ''
          }`}
          key={tag}
          onClick={() => toogleTag(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
