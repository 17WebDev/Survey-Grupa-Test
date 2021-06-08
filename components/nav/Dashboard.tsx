import Link from 'next/link';

import styles from 'styles/Nav.module.scss';

function DashboardNav() {
  return (
    <section className={styles.userMenu}>
      <section className={styles.userNav}>
        <p>Dashboard</p>

        <div className={styles.linksWrap}>
          <a href="">Drafts</a>
          <a href="">Active</a>
          <a href="">Closed</a>
        </div>
      </section>

      <div className={styles.btnContainer}>
        <Link href="/admin/survey/create">
          <a className={styles.surveyBtn}>New Survey</a>
        </Link>
      </div>
    </section>
  );
}

export default DashboardNav;
