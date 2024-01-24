import React, {forwardRef} from 'react';
import styles from './About.module.scss';
import aboutImg from '../../../img/about-img.png'
import Button from "../../UI/Button/Button";
import Summary from "../../Summary/Summary";
import Container from '../../Container/Container';

const About = forwardRef((props, ref)=>{

    return (
        <section className={styles.about} ref={ref}>

            <Container>
                <Summary title={'INTRODUCTION'} subtitle={'TO HYDRA VR'}/>

                <div className={styles.aboutWrapper}>

                    <img src={aboutImg} alt="img"/>

                    <div className={styles.aboutInfo}>

                        <h2 className={styles.title}>
                            ABOUT
                        </h2>
                        <h3 className={styles.subtitle}>
                            HYDRA VR
                        </h3>

                        <p className={styles.text}>
                            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.
                        </p>

                        <Button>
                            LET’S GET IN TOUCH
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
});

export default About;
