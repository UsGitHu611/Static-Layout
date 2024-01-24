import React, {forwardRef} from 'react';
import styles from './Process.module.scss';
import Summary from "../../Summary/Summary";
import Container from "../../Container/Container";

const Process = forwardRef((props, ref)=>{
    return (
        <section className={styles.process} ref={ref}>

            <Container>
                <Summary title={'HOW WE BUILD'} subtitle={'WITH HYDRA VR?'}/>

                <ul className={styles.processList}>

                    <li className={styles.processListItem}>
                        <div className={styles.wrapper}>
                            <div className={styles.circle}></div>
                            <p>01</p>
                        </div>
                        <p className={styles.info} style={{maxWidth:"187px"}}>
                            3D Conception
                            & Design
                        </p>
                    </li>

                    <li className={styles.processListItem}>
                        <div className={styles.wrapper}>
                            <div className={styles.circle}></div>
                            <p>02</p>
                        </div>
                        <p className={styles.info} style={{maxWidth:"140px"}}>
                            Interaction
                            Design
                        </p>
                    </li>

                    <li className={styles.processListItem}>
                        <div className={styles.wrapper}>
                            <div className={styles.circle}></div>
                            <p>03</p>
                        </div>
                        <p className={styles.info} style={{maxWidth:"157px"}}>
                            VR World
                            User Testing
                        </p>
                    </li>

                    <li className={styles.processListItem}>
                        <div className={styles.wrapper}>
                            <div className={styles.circle}></div>
                            <p>04</p>
                        </div>
                        <p className={styles.info} style={{maxWidth:"117px"}}>
                            Hydra VR
                            Deploy
                        </p>
                    </li>
                </ul>
            </Container>
        </section>
    );
});

export default Process;
