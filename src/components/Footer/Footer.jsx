import React from 'react';
import styles from './Footer.module.scss'
import Container from "../Container/Container";
import footerLogo from '../../img/design/footer-logo.svg'
import youtube from '../../img/social-link/youtube.svg'
import instagram from '../../img/social-link/instagram.svg'
import pinterest from '../../img/social-link/pinterest.svg'
import linkedin from '../../img/social-link/linkedin.svg'
import facebook from '../../img/social-link/facebook.svg'
import twitter from '../../img/social-link/twitter.svg'
import footerHorizontalLine from '../../img/design/footer-horizontal-line.svg'
import Button from "../UI/Button/Button";

const Footer = () => {
    return (
        <Container>
            <footer className={styles.footer}>

                <ul className={styles.contactList}>

                    <li className={styles.listItem} style={{justifySelf:"flex-start"}}>
                        <img src={footerLogo} alt="footer-Logo"/>
                    </li>

                    <li className={styles.listItem}>
                        <p className={styles.links}>
                            ABOUT
                        </p>
                        <p className={styles.links}>
                            SERVICES
                        </p>
                        <p className={styles.links}>
                            TECHNOLOGIES
                        </p>
                        <p className={styles.links}>
                            HOW TO
                        </p>
                        <p className={styles.links}>
                            JOIN HYDRA
                        </p>
                    </li>

                    <li className={styles.listItem}>
                        <p className={styles.links}>
                            F.A.Q
                        </p>
                        <p className={styles.links}>
                            SITEMAP
                        </p>
                        <p className={styles.links}>
                            CONDITIONS
                        </p>
                        <p className={styles.links}>
                            LICENSES
                        </p>
                    </li>

                    <li className={styles.listItem} style={{alignItems:"self-start"}}>
                        <h5 className={styles.title}>
                            SOCIALIZE WITH HYDRA
                        </h5>
                        <ul className={styles.socialLinks} >
                            <li>
                                <img src={facebook} alt=""/>
                            </li>
                            <li>
                                <img src={twitter} alt=""/>
                            </li>
                            <li>
                                <img src={linkedin} alt=""/>
                            </li>
                            <li>
                                <img src={youtube} alt=""/>
                            </li>
                            <li>
                                <img src={instagram} alt=""/>
                            </li>
                            <li>
                                <img src={pinterest} alt=""/>
                            </li>
                        </ul>
                        <Button>
                            BUILD YOUR WORLD
                        </Button>
                    </li>

                </ul>
                <img src={footerHorizontalLine} alt="line"/>

                <p className={styles.copyright}>
                    2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
                </p>
            </footer>

        </Container>
    );
};

export default Footer;
