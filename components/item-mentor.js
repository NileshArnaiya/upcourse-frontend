import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/itemmentor.module.scss";
import { FaStar, FaTag, FaRegBell, FaRegCommentAlt, FaPhoneAlt } from "react-icons/fa";

const ItemMentor = ({ user }) => {
    return (
        <div className={styles.itemmentor}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.columnLeft}>
                        <div className={styles.subColumnLeft}>
                            <div className={styles.images}>
                                <Image priority src={user.thumbnail} alt={user.name} layout="fill" objectFit="cover" />
                            </div>
                            <p className={styles.salary}>
                                <span className={styles.money}>${user.salary}</span>
                                <span className={styles.smalltext}>/&nbsp;month</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnMiddle}>
                        <div className={styles.subColumnMiddle}>
                            <h2 className={styles.name}>{user.name}<sub>{user.city}</sub></h2>
                            <div className={styles.star}>
                                <span><FaStar /></span>{user.armorial}</div>
                        </div>
                        <p className={styles.place}>{user.service} at <span className={styles.work}>{user.workplace !== "" ? user.workplace : user.company}</span></p>
                        <p className={styles.experience}>{user.experience}</p>
                        <div className={styles.review}>
                            <span className={styles.star}>
                                <FaStar />
                            </span>
                            <span className={styles.star}>
                                <FaStar />
                            </span>
                            <span className={styles.star}>
                                <FaStar />
                            </span>
                            <span className={styles.star}>
                                <FaStar />
                            </span>
                            <span className={styles.star}>
                                <FaStar />
                            </span>
                            <span style={{ color: "#172E59" }}><b>5.0</b></span>
                        </div>
                        <div className={styles.description}>{user.description}</div>
                        <div className={styles.tags}>
                            {user.tags.map((tag, index) => (
                                <Link href="#!" key={index}>
                                    <a className={styles.job}>{tag}</a>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.viewProfile}>
                            <div className={styles.btn}>
                                <Link href="/mentors/[name]" as={`/mentors/${user.slug}`}>
                                    <a>View Profile</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className={styles.columnRight}>
                        <div className={styles.useTrial}>
                            <Link href="#!">
                                <a className={styles.text}>
                                    <i>
                                        <FaTag />
                                    </i>
                                    7 Day Free Trial
                                </a>
                            </Link>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.question}>
                                What can I expect from this mentor?
                            </p>
                            <div className={styles.line} />
                            <div>
                                <i>
                                    <FaRegBell />
                                </i>
                                <p>
                                    One of our top mentors, top service & fast responses
                                </p>
                            </div>
                            <div className={styles.line} />
                            <div>
                                <div>
                                    <i>
                                        <FaRegCommentAlt />
                                    </i>
                                </div>
                                <p>Unlimited chat, e-mail or text with mentor, within boundaries.</p>
                            </div>
                            <div className={styles.line} />
                            <div>
                                <div>
                                    <i>
                                        <FaPhoneAlt />
                                    </i>
                                </div>
                                <p>Up to 4 calls per month</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemMentor;