import styles from './Header.module.css';

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>Mon portfolio</span>
    </div>
  );
}
