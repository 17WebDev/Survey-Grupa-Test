import { Fragment } from 'react';
import styles from 'styles/Card.module.scss';

function UserCard() {
    return (
        <Fragment>
            <section >
                <div className={styles.surveyCard}>
                    <div className={styles.cardDEtail}></div>
                    <div className={styles.surveyTitle}>
                        <div className={styles.svTitle}>Survey Title</div>
                        <a href="">
                        <img alt="BabaFi"  src="images/more-vertical.svg" />
                        </a>
                    </div>
                    <div className={styles.edited}>Edited 2 weeks ago
                    </div>
                    <section className={styles.cardBtWrap}>
                        <a className={styles.cardBtn} href="">Draft</a>
                    </section>
                </div>
            </section>
            <section >
                <div className={styles.surveyCard}>
                <div className={styles.green}></div>
                    <div className={styles.surveyTitle}>
                        <div className={styles.svTitle}>Survey Title</div>
                        <a href="">
                        <img alt="BabaFi"  src="images/more-vertical.svg" />
                        </a>
                    </div>
                    <div className={styles.edited}>Open until June 10, 2021
                    </div>
                    <section className={styles.cardBtWrap}>
                        <a className={`${styles.cardBtn} ${styles.editedClosed}`} href="">26</a>
                        responses
                    </section>
                </div>
            </section>
            <section >
                <div className={styles.surveyCard}>
                    <div className={styles.closed}></div>
                    <div className={styles.surveyTitle}>
                        <div className={styles.svTitle}>Survey Title</div>
                        <a href="">
                        <img alt="BabaFi"  src="images/more-vertical.svg" />
                        </a>
                    </div>
                    <div className={styles.edited}>Closed on June 3, 2021
                    </div>
                    <section className={styles.cardBtWrap}>
                        <a className={`${styles.cardBtn} ${styles.editedClosed}`} href="">226</a>
                        responses
                    </section>
                </div>
            </section>
            <section >
                <div className={styles.surveyCard}>
                    <div className={styles.cardDEtail}></div>
                    <div className={styles.surveyTitle}>
                        <div className={styles.svTitle}>Survey Title</div>
                        <a href="">
                        <img alt="BabaFi"  src="images/more-vertical.svg" />
                        </a>
                    </div>
                    <div className={styles.edited}>Edited 2 weeks ago
                    </div>
                    <section className={styles.cardBtWrap}>
                        <a className={styles.cardBtn} href="">Draft</a>
                    </section>
                </div>
            </section>
        </Fragment>
    )
}

export default UserCard;