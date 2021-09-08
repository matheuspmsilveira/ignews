import Image from 'next/image';
import logoImage from '../../../public/images/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImage} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
