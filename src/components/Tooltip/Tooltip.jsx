import React from 'react';
import { useState } from 'react';
import styles from './Tooltip.module.css';
import iconFacebook from '../../assets/images/facebook.png';
import iconTwitter from '../../assets/images/twitter.png';
import iconPinterest from '../../assets/images/pinterest-circular-logo-symbol.png';

export default function Tooltip(props) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className={styles.tooltipContainer}
            onClick={() => setIsVisible(!isVisible)}
        >
            {props.children}
            {isVisible && (
                <div className={styles.tooltip}>
                    <div className={styles.tooltipRow}>
                        <span>SHARE</span>
                        <img src={iconFacebook} alt="" />
                        <img src={iconTwitter} alt="" />
                        <img src={iconPinterest} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
}
