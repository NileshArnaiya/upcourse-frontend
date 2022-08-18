import React from 'react';
import InputSearch from '../../components/input-search';
import styles from "../../styles/search.module.scss";

const Search = ({ searchDataMentor, textSearch }) => {
    return (
        <div className={styles.search}>
            <div className="container">
                <div className={styles.container}>
                    <InputSearch textSearch={textSearch} searchDataMentor={searchDataMentor} />
                </div>
            </div>
        </div>
    );
};

export default Search;