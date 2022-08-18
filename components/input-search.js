import React from 'react';
import styles from "../styles/inputsearch.module.scss";
import { FaSearch } from "react-icons/fa";

const InputSearch = ({ searchDataMentor, textSearch }) => {
    return (
        <>
            <input type="text" value={textSearch} className={styles.inputSearch} placeholder="Search name or company..." onChange={searchDataMentor} />
            <div className={styles.icon}>
                <FaSearch />
            </div>
        </>
    );
};

export default InputSearch;