import React, {useRef} from 'react';
import styles from './Header.module.scss';
import logo from '../../img/logo.svg'
import logoText from '../../img/logoText.svg'
import Button from "../UI/Button/Button";
import Container from "../Container/Container";
import Main from "../Main/Main";
import Promo from "../Sections/Promo/Promo";
import About from "../Sections/About/About";
import Services from "../Sections/Services/Services";
import Tech from "../Sections/Tech/Tech";
import Process from "../Sections/Process/Process";
import Option from "../Sections/Option/Option";

const Header = () => {

    const refAbout = useRef('');
    const refProcess = useRef('');
    const refServices = useRef('');
    const refTech = useRef('');
    const refOption = useRef('');

    const scrollTo = (nameRef) => {
        nameRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <Container>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo"/>
                    <img src={logoText} alt="logoText"/>
                </div>

                <nav className={styles.menu}>
                    <button className={styles.menuBtn} onClick={()=>scrollTo(refAbout)}>
                        ABOUT
                    </button>
                    <button className={styles.menuBtn} onClick={()=>scrollTo(refServices)}>
                        SERVICES
                    </button>
                    <button className={styles.menuBtn} onClick={()=>scrollTo(refTech)}>
                        TECHNOLOGIES
                    </button>
                    <button className={styles.menuBtn} onClick={()=>scrollTo(refProcess)}>
                        HOW TO
                    </button>
                </nav>

                <div className={styles.btnContainer}>
                    <button className={styles.customBtn}>
                        CONTACT US
                    </button>

                    <Button onClick={() => scrollTo(refOption)}>
                        JOIN HYDRA
                    </Button>
                </div>

            </header>

            <Main>
                <Promo title={'promo'}/>
                <About title={'about'} ref={refAbout}/>
                <Services title={'services'} ref={refServices}/>
                <Tech title={'tech'} ref={refTech}/>
                <Process title={'process'} ref={refProcess}/>
                <Option title={'option'} ref={refOption}/>
            </Main>

        </Container>

    );
};

export default Header;
