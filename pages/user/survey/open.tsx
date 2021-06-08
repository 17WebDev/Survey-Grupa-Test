import Link from 'next/link';
import Charts from 'components/charts/Charts'
import { Fragment } from 'react';
import styles from 'styles/OpenSv.module.scss';

function open() {
  return (
    <Fragment>
      <section className={styles.userMenu}>
        <div className={styles.menuInfo}>
          <Link href="/admin">
            <a className={styles.brand}>Dashboard/</a>
          </Link> <span>Survey Title</span>
        </div>
        <div>
          <button className={styles.surveyBtn}>Submit</button>
          <a href="">
            <img alt="vertical-dots" src="/images/more-vertical.svg" />
          </a>
          <div className={styles.userInfo}>
            <p> john doe </p>
            <img alt="Image" className={styles.userIcon} src="/images/Avatar.png" />
          </div>
        </div>
      </section>
      <Charts/>
    </Fragment>

  );
}

export default open;
