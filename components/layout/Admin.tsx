import Head from 'next/head';
import { Fragment, ReactNode } from 'react';
import Link from 'next/link';

import styles from 'styles/Layout.module.scss';

type Props = {
  children: ReactNode;
  title?: string;
};

function AdminLayout(props: Props) {
  const getTitle = () => {
    if (props.title) {
      return <title>{props.title} | Groupa</title>;
    } else {
      return <title>Groupa</title>;
    }
  };

  return (
    <Fragment>
      <Head>{getTitle()}</Head>

      <section className={styles.container}>
        <main className={styles.content}>{props.children}
          <nav className={styles.nav}>
            <div className={styles.brand}>
              Survey Group
            </div>
            <div className={styles.navUser}> <p>
              Michelle Zhang
              </p>
              <img
                alt="BabaFi"
                className={styles.navbarBrand}
                src="images/Avatar.png"
              />
            </div>
          </nav>
        </main>
      </section>
    </Fragment>
  );
}

export default AdminLayout;
