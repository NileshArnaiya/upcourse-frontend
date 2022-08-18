import React from 'react';
import Image from 'next/image';
import styles from "../../styles/banner.module.scss";
import Navbar from '../../components/navbar';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Navbar />
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.text}>
                        <div className={styles.wrap}>
                            <h1 className={styles.title}>
                                <span className={styles.newline}>1-on-1</span> <span className={styles.newline}>Startup</span> <span className={styles.newline}>Mentorship</span>
                            </h1>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career. All on your terms, for a flat monthly price.
                            </p>

                        </div>
                        <div className={styles.inputSearch}>
                            <input type="text" placeholder="Try Marketing,JavaScript or UX Design" />
                            <div className={styles.btnSearch}>find my mentor</div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttonMentors}>
                                <p className={styles.sub}>Popular searches</p>
                                <div className={styles.btn}>javascript mentors</div>
                                <div className={styles.btn}>product managers</div>
                                <div className={styles.btn}>python mentors</div>
                                <div className={styles.btn}>marketing experts</div>
                                <div className={styles.btn}>ux design mentors</div>
                                <div className={styles.btn}>machine learning mentors</div>
                                <div className={styles.btn}>startup mentors</div>
                                <div className={styles.btn}>branding experts</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shapeBlueLeft}>
                        <Image src="/shapes/shape-blue.png" objectFit="cover" layout='fill' />
                    </div>
                    <div className={styles.shapeBlueRight}>
                        <Image src="/shapes/shape-blue.png" objectFit="cover" layout='fill' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;