import { SettingTag } from '@interfaces/SettingTag';

import styles from './Tags.module.css';

interface TagsProps {
  toogleSettingTag: (tag: SettingTag) => void;
  toogleTag: (tag: string) => void;
  resetTags: () => void;
  currentSettingTags: SettingTag[];
  currentTags: string[];
  allTags: string[];
}

export default function Tags({
  toogleTag,
  toogleSettingTag,
  allTags,
  currentSettingTags,
  currentTags,
  resetTags,
}: TagsProps): JSX.Element {
  return (
    <div className={styles.tags}>
      <button type="button" onClick={resetTags}>
        Reset tags
      </button>
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
      {(Object.keys(SettingTag) as SettingTag[]).map((tag) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          className={`${styles.tag!} ${styles.settingTag!} ${
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            currentSettingTags.includes(tag) ? styles.tagSelected! : ''
          }`}
          key={tag}
          onClick={() => toogleSettingTag(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
