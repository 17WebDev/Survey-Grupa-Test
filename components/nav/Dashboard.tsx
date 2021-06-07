import styles from 'styles/Nav.module.scss';

function DashboardNav() {
  return (
    <section className={styles.userMenu}>
      <p>Dashboard</p>

      <div className={styles.btnContainer}>
        <a href="">New Survey</a>
      </div>
    </section>
  );
}

export default DashboardNav;
