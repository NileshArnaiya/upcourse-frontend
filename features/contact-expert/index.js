import React from 'react';
import styles from "../../styles/contactexpert.module.scss";

const ContactExpert = () => {
    return (
        <div className={styles.contactexpert}>
            <div className="container">
                <h2 className={styles.title}>Not sure if mentorship is right for you?<span>Give it a try with a one-off session.</span></h2>
                <div className={styles.description}>
                    <p>
                        A quick, easy call with an expert is just one click away with our attractive one-off sessions. Picking a brain, talking through an issue or getting to know an industry expert has never been easier.
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.header}>
                            <h3 className={styles.subtitle}>Introductory Call</h3>
                            <p className={styles.subdesc}>
                                If you're looking for a mentor, and you're just not sure about how this all works – this should be for you. In a casual, informal introductory call, a mentor will introduce themselves...Read More
                            </p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.price}>
                                <div>Approx. 30 minutes</div>
                                <div>$39</div>
                            </div>
                            <div className={styles.btn}>
                                <div className={styles.text}>Explore</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.header}>
                            <h3 className={styles.subtitle}>Study Plan</h3>
                            <p className={styles.subdesc}>
                                Looking to learn a new skill? The vast amount of resources on any topic on the internet can feel overwhelming at times. A mentor can give you an overview of worthwhile...Read More
                            </p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.price}>
                                <div>Approx. 30 minutes</div>
                                <div>$39</div>
                            </div>
                            <div className={styles.btn}>
                                <div className={styles.text}>Explore</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.header}>
                            <h3 className={styles.subtitle}>Interview Preparation</h3>
                            <p className={styles.subdesc}>
                                Some big interviews coming up? In this 1-hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions...Read More
                            </p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.price}>
                                <div>Approx. 30 minutes</div>
                                <div>$39</div>
                            </div>
                            <div className={styles.btn}>
                                <div className={styles.text}>Explore</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactExpert;