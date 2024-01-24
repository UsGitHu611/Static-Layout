import React from 'react';
import input from "./Input";
import styles from './Input.module.scss';

const Input = ({ type, placeholder, width }) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            style={{width}}
        />
    );
};

export default Input;
