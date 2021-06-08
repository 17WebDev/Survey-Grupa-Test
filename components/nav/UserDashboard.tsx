import Link from 'next/link';

import styles from 'styles/Nav.module.scss';

function UserDashboard() {
  return (
    <section className={styles.userMenu}>
      <section className={styles.userNav}>
        <p>Dashboard</p>

        <div className={styles.linksWrap}>
          <a href="">Open</a>
          <a href="">Completed</a>
        </div>
      </section>
    </section>
  );
}

export default UserDashboard;
