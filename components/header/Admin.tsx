import Link from 'next/link';

import styles from 'styles/Header.module.scss';

function AdminHeader() {
  return (
    <nav className={styles.nav}>
      <Link href="/admin">
        <a className={styles.brand}>Survey Group</a>
      </Link>

      <div className={styles.navUser}>
        <p>John Doe</p>

        <img alt="BabaFi" className={styles.userIcon} src="images/Avatar.png" />
      </div>
    </nav>
  );
}

export default AdminHeader;
