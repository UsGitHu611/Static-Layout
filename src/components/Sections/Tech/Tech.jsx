import React, {forwardRef} from 'react';
import styles from './Tech.module.scss';
import bgTech from '../../../img/techImg.jpg'
import arrowDown from '../../../img/arrowDown.svg';
import unreal from '../../../img/unreal.svg'
import unity from '../../../img/unity.svg'
import oculus from '../../../img/oculus.svg'
import vive from '../../../img/vive.svg'
import Container from "../../Container/Container";

const Tech = forwardRef((props, ref)=>{

    return (
        <section className={styles.tech} ref={ref}>

            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.techMask}>
                        <img src={bgTech} alt="bgimg"/>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                TECHNOLOGIES & HARDWARE
                            </h2>
                            <h3 className={styles.subtitle}>
                                USED BY HYDRA VR.
                            </h3>
                        </div>

                    </div>

                    <div className={styles.arrowDown}>
                        <img src={arrowDown} alt="img"/>
                    </div>
                </div>

                <div className={styles.gameDevLogo}>
                    <img src={unreal} alt=""/>
                    <img src={unity} alt=""/>
                    <img src={oculus} alt=""/>
                    <img src={vive} alt=""/>
                </div>
            </Container>

        </section>
    );
});

export default Tech;
