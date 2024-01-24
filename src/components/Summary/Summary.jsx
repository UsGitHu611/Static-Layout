import longArrow from "../../img/longArrow.svg";
import React from "react";
import styles from './Summary.module.scss';

const Summary = ({ title, subtitle }) => {
    return (
        <div className={styles.summary}>

            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <img className={styles.arrow} src={longArrow} alt="arrow"/>
            </div>

            <p className={styles.text}>
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
        </div>
    );
};

export default Summary;
