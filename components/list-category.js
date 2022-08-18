import React, { forwardRef, useEffect } from 'react';
import Link from "next/link";
import styles from "../styles/listcategory.module.scss";

const ListCategory = (({ showCategory, setShowCategory, filterCategoryMentor }, ref) => {
    useEffect(() => {
        const handleCategoryClickOutSide = (event) => {
            if (!ref.current.contains(event.target)) {
                setShowCategory(!showCategory)
            }
        }
        if (showCategory) {
            document.addEventListener("mousedown", handleCategoryClickOutSide)
        }
        return () => {
            document.removeEventListener("mousedown", handleCategoryClickOutSide)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showCategory])
    return (
        <ul className={`${styles.listcategory} ${showCategory ? styles.active : ""}`} ref={ref}>
            <li>
                <Link href="#!">
                    <a className={styles.active} onClick={() => filterCategoryMentor("All Category")}>All Category</a>
                </Link>
            </li>
            <li>
                <Link href="#!">
                    <a onClick={() => filterCategoryMentor("Engineering & Data")}>Engineering &#38; Data</a>
                </Link>
            </li>
            <li>
                <Link href="#!">
                    <a onClick={() => filterCategoryMentor("UX & Design")}>UX &#38; Design</a>
                </Link>
            </li>
            <li>
                <Link href="#!">
                    <a onClick={() => filterCategoryMentor("Business & Management")}>Business &#38; Management</a>
                </Link>
            </li>
            <li>
                <Link href="#!">
                    <a onClick={() => filterCategoryMentor("Product & Marketing")}>Product &#38; Marketing</a>
                </Link>
            </li>
        </ul>
    )
})
export default forwardRef(ListCategory);