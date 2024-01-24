import React from 'react';
import styles from './ServicesItem.module.scss';
import Button from "../UI/Button/Button";
const ServicesItem = ({ img, title, children }) => {
    return (
        <div className={styles.item}>

            <div className={styles.photoMask}>
                <img src={img} alt="img"/>
            </div>

            <h3 className={styles.title}>
                {title}
            </h3>

            <svg style={{marginBottom:"21px"}} xmlns="http://www.w3.org/2000/svg" width="155" height="1" viewBox="0 0 155 1" fill="none">
                <path d="M0.5 0.5H154.5" stroke="#C0B7E8"/>
            </svg>

            <p className={styles.text}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet porttitor rhoncus
                libero justo laoreet sit amet vitae.
            </p>

            <Button>
                TRY IT NOW
            </Button>
        </div>
    );
};

export default ServicesItem;
