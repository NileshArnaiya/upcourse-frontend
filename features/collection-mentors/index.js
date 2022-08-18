import React from 'react';
import Image from 'next/image';
import styles from "../../styles/collectionmentor.module.scss";

const CollectionMentors = () => {
    return (
        <div className={styles.collectionmentors}>
            <div className="container">
                <h2 className={styles.title}>An arsenal of industry veterans and<span>mentoring packages at a flexible price.</span></h2>
                <div className={styles.description}>
                    <p>
                        Pick from a curated collection of mentors and services. Try them out for 7 days with no obligation. Found your mentoring sessions useful? Move to a low-cost, monthly mentoring subscription. No lock-ins, no hidden fees – Just accelerated professional growth.
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <div className={styles.column}>
                            <div className={styles.header}>
                                <div className={styles.wrap}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Ayla S.</div>
                                        <div className={styles.job}>Top-rated marketing expert</div>
                                    </div>
                                    <div className={styles.picuser}>
                                        <Image src="/mentors/ayla.png" width={60} height={60} alt="ayla" />
                                    </div>
                                </div>
                                <div className={styles.mentorship}>
                                    <div>Mentorship</div>
                                    <div>$150/month</div>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.package}>
                                    <div>Intro Session</div>
                                    <div>$39</div>
                                </div>
                                <div className={styles.package}>
                                    <div>CV Review</div>
                                    <div>$69</div>
                                </div>
                                <div className={styles.package}>
                                    <div>Launch Plan</div>
                                    <div>$129</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.header}>
                                <div className={styles.wrap}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Francois J.</div>
                                        <div className={styles.job}>Full-Stack Software Developer</div>
                                    </div>
                                    <div className={styles.picuser}>
                                        <Image src="/mentors/francois.png" width={60} height={60} alt="francois" />
                                    </div>
                                </div>
                                <div className={styles.mentorship}>
                                    <div>Mentorship</div>
                                    <div>$90/month</div>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.package}>
                                    <div>Intro Session</div>
                                    <div>$39</div>
                                </div>
                                <div className={styles.package}>
                                    <div>CV Review</div>
                                    <div>$69</div>
                                </div>
                                <div className={styles.package}>
                                    <div>Launch Plan</div>
                                    <div>$129</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.header}>
                                <div className={styles.wrap}>
                                    <div className={styles.info}>
                                        <div className={styles.name}>Annie L.</div>
                                        <div className={styles.job}>UX Designer</div>
                                    </div>
                                    <div className={styles.picuser}>
                                        <Image src="/mentors/annie.png" width={60} height={60} alt="annie" />
                                    </div>
                                </div>
                                <div className={styles.mentorship}>
                                    <div>Mentorship</div>
                                    <div>$50/month</div>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.body}>
                                <div className={styles.package}>
                                    <div>Intro Session</div>
                                    <div>$39</div>
                                </div>
                                <div className={styles.package}>
                                    <div>Portfolio Review</div>
                                    <div>$69</div>
                                </div>
                                <div className={styles.package}>
                                    <div>Expert Session</div>
                                    <div>$140</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CollectionMentors;