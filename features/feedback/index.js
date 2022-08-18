import React from 'react';
import Image from 'next/image';
import styles from "../../styles/feedback.module.scss";

const Feedback = () => {
    return (
        <div className={styles.feedback}>
            <div className="container">
                <div className={styles.title}>
                    <h3>Get mentored by industry veterans</h3>
                </div>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <Image priority src="/brands/google.svg" layout="fill" objectFit="contain" alt="google" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/microsoft.svg" layout="fill" objectFit="contain" alt="microsoft" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/facebook.svg" layout="fill" objectFit="contain" alt="facebook" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/amazon.svg" layout="fill" objectFit="contain" alt="amazon" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/github.svg" layout="fill" objectFit="contain" alt="github" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/airbnb.svg" layout="fill" objectFit="contain" alt="airbnb" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/uber.svg" layout="fill" objectFit="contain" alt="uber" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/stripe.svg" layout="fill" objectFit="contain" alt="stripe" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/netflix.svg" layout="fill" objectFit="contain" alt="netflix" />
                    </div>
                    <div className={styles.image}>
                        <Image priority src="/brands/andela.svg" layout="fill" objectFit="contain" alt="andela" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;