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
        <a className={styles.surveyBtn} href="">
          New Survey
        </a>
      </div>
    </section>
  );
}

export default DashboardNav;
