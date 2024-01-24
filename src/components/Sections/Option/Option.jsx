import React, {forwardRef} from 'react';
import styles from './Option.module.scss';
import Container from "../../Container/Container";
import line from '../../../img/design/line.svg'
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
const Option = forwardRef((props, ref)=>{

    return (
        <section className={styles.option} ref={ref}>

            <Container>

                <div className={styles.wrapper}>

                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            JOIN HYDRA
                        </h2>

                        <img style={{margin:"30px 0 21px 0"}} src={line} alt="line-img"/>

                        <h3 className={styles.subtitle}>
                            Let’s Build Your VR Experience
                        </h3>
                    </div>

                    <form className={styles.form}>
                        <Input
                            type={'text'}
                            placeholder={'First Name'}
                            width={524}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Last Name'}
                            width={524}
                        />
                        <Input
                            type={'mail'}
                            placeholder={'Email'}
                            width={524}
                        />
                        <Input
                            type={'tel'}
                            placeholder={'Phone Number'}
                            width={524}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Subject'}
                            width={'100%'}
                        />
                        <textarea className={styles.textarea} placeholder={'Tell Us Something...'}></textarea>

                        <Button>
                            SEND TO HYDRA
                        </Button>
                    </form>
                </div>

            </Container>
        </section>
    );
});

export default Option;
