import React from 'react';
import styles from './ArticleComponent.module.css';
import profileImg from '../../assets/images/avatar-michelle.jpg';
import Tooltip from '../Tooltip/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

export default function ArticleComponent(props) {
    return (
        <section className={styles.card}>
            <aside></aside>
            <article>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className={styles.profile}>
                    <div className={styles.profileInfo}>
                        <img src={profileImg} alt="" />
                        <div className={styles.profileCol}>
                            <h2>{props.pseudo}</h2>
                            <span className={styles.date}>{props.date}</span>
                        </div>
                    </div>
                    <Tooltip>
                        <FontAwesomeIcon icon={faShare} />
                    </Tooltip>
                </div>
            </article>
        </section>
    );
}
