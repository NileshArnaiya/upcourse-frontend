import React from 'react';
import styles from "../styles/buttoncategory.module.scss";
import { FaAngleDown } from "react-icons/fa";

const ButtonCategory = ({ text, handleClick }) => {
    
    return (
        <>
            <button className={styles.buttonCategory} onClick={handleClick}>
                <span>
                    {text}
                </span>
                <div className={styles.icon}>
                    <FaAngleDown />
                </div>
            </button>
        </>
    );
};

export default ButtonCategory;