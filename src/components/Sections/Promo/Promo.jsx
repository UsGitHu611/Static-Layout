import React from 'react';
import styles from './Promo.module.scss'
import Button from "../../UI/Button/Button";
import arrow from "../../../img/arrow-right.svg";
import promoImg from "../../../img/promo-img.png";
import location from "../../../img/location.svg";
import phone from "../../../img/phone.svg";
import mail from "../../../img/mail.svg";
import Container from "../../Container/Container";
import vector1 from '../../../img/design/Vector 1.svg'
import vector2 from '../../../img/design/Vector 2.svg'
import vector3 from '../../../img/design/Vector 3.svg'

const Promo = () => {
    return (
        <section className={styles.promo}>

            <Container>
                <div className={styles.wrapper}>

                    <div className={styles.info}>

                        <div style={{marginBottom:"36px"}}>
                            <h1 className={styles.promoTitle}>
                                <span className={styles.firstWord}>Dive</span> Into The Depths
                            </h1>
                            <h1 className={styles.promoTitle}>
                                Of <span className={styles.secondWords}>Virtual Reality</span>
                            </h1>
                        </div>

                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae.
                        </p>

                        <div className={styles.btnArrow}>
                            <Button>
                                BUILD YOUR WORLD
                            </Button>

                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>

                    <div className={styles.promoImg}>
                        <img src={promoImg} alt="img"/>
                        <img className={styles.vector1} src={vector1} alt=""/>
                        <img className={styles.vector2} src={vector2} alt=""/>
                        <img className={styles.vector3} src={vector3} alt=""/>
                    </div>
                </div>

                <div className={styles.contacts}>

                    <ul className={styles.list}>
                        <li>
                            <img src={location}/>
                            <div className="listInfo">
                                <h3 className={styles.subtitle}>Pay Us a Visit</h3>
                                <p className={styles.subtext}>Union St, Seattle, WA 98101, United States</p>
                            </div>
                        </li>

                        <li className={styles.middleItem} style={{gap:"45px"}}>
                            <img src={phone}/>
                            <div className="listInfo">
                                <h3 className={styles.subtitle}>Give Us a Call</h3>
                                <p className={styles.subtext}>(110) 1111-1010</p>
                            </div>
                        </li>

                        <li style={{gap:"29px"}}>
                            <img src={mail}/>
                            <div className="listInfo">
                                <h3 className={styles.subtitle}>Send Us a Message</h3>
                                <p className={styles.subtext}>Contact@HydraVTech.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Promo;
