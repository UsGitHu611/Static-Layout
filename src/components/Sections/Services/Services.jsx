import React, {forwardRef} from 'react';
import styles from './Services.module.scss';
import Summary from "../../Summary/Summary";
import ServicesItem from "../../ServicesItem/ServicesItem";
import item1 from '../../../img/item1.jpg'
import item2 from '../../../img/item2.jpg'
import item3 from '../../../img/item3.jpg'
import item4 from '../../../img/item4.jpg'
import Container from "../../Container/Container";

const Services = forwardRef((props, ref)=> {
    return (
        <section className={styles.services} ref={ref}>

            <Container>
                <Summary title={'WHY BUILD'} subtitle={'WITH HYDRA?'}/>

                <div className={styles.wrapper}>
                    <ServicesItem img={item1} title={'SIMULATION'}/>

                    <ServicesItem img={item2} title={'EDUCATION'}/>

                    <ServicesItem img={item3} title={'SELF-CARE'}/>

                    <ServicesItem img={item4} title={'OUTDOOR'}/>
                </div>
            </Container>

        </section>
    );
});

export default Services;
