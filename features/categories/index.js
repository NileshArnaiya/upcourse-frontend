import React, { useRef, useState } from 'react';
import ButtonCategory from '../../components/button-category';
import styles from "../../styles/categories.module.scss";
import ListCategory from '../../components/list-category';

const Categories = ({ filterCategoryMentor }) => {
    const [showCategory, setShowCategory] = useState(false);
    const dropdownCategory = useRef();
    

    const handleClickCategory = () => {
        setShowCategory(!showCategory);
    }
    
    return (
        <div className={styles.categories}>
            <div className="container">
                <div className={styles.container}>
                    <ButtonCategory text="Category" handleClick={handleClickCategory} />
                    <ListCategory showCategory={showCategory} setShowCategory={setShowCategory} ref={dropdownCategory} filterCategoryMentor={filterCategoryMentor} />
                    <ButtonCategory text="Skills" />
                    <ButtonCategory text="Topics" />
                    <ButtonCategory text="Services" />
                </div>
            </div>
        </div>
    );
};

export default Categories;