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
                    <div className={styles.cardBtWrap}>Edited 2 weeks ago</div>
                    <section>
                        <a className={styles.cardBtn} href="">Draft</a>
                    </section>
                </div>
            </section>
        </Fragment>
    )
}

export default UserCard;