import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../styles/footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.column}>
                        <Image src="/logo/footer-logo.png" alt="footer logo" width={300} height={100} objectFit="contain" />
                        <p className={styles.description}>
                            Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
                        </p>
                        <div className={styles.icons}>
                            <Link href="#!">
                                <a>
                                    <FaFacebook />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <FaInstagram />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <FaTwitter />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <FaLinkedin />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.wrap}>
                            <div className={styles.item}>
                                <span className={styles.title}>Platform</span>
                                <Link href="#!">
                                    <a>Browse Mentors</a>
                                </Link>
                                <Link href="#!">
                                    <a>Book a Session</a>
                                </Link>
                                <Link href="#!">
                                    <a>Become a Mentor</a>
                                </Link>
                                <Link href="#!">
                                    <a>Mentorship for Teams</a>
                                </Link>
                                <Link href="#!">
                                    <a>Testimonials</a>
                                </Link>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.title}>Resources</span>
                                <Link href="#!">
                                    <a>Newsletter</a>
                                </Link>
                                <Link href="#!">
                                    <a>Podcast</a>
                                </Link>
                                <Link href="#!">
                                    <a>Case Studies</a>
                                </Link>
                                <Link href="#!">
                                    <a>Perks</a>
                                </Link>
                                <Link href="#!">
                                    <a>Templates</a>
                                </Link>
                                <Link href="#!">
                                    <a>Blog</a>
                                </Link>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.title}>Company</span>
                                <Link href="#!">
                                    <a>About</a>
                                </Link>
                                <Link href="#!">
                                    <a>Partner Program</a>
                                </Link>
                                <Link href="#!">
                                    <a>Write For Us</a>
                                </Link>
                                <Link href="#!">
                                    <a>Code of Conduct</a>
                                </Link>
                                <Link href="#!">
                                    <a>Privacy Policy</a>
                                </Link>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.title}>Support</span>
                                <Link href="#!">
                                    <a>FAQ</a>
                                </Link>
                                <Link href="#!">
                                    <a>Contact</a>
                                </Link>
                                <span className={styles.title}>Collections</span>
                                <Link href="#!">
                                    <a>Topics</a>
                                </Link>
                                <Link href="#!">
                                    <a>Mentor Groups</a>
                                </Link>
                                <Link href="#!">
                                    <a>Coaches</a>
                                </Link>
                                <Link href="#!">
                                    <a>Companies</a>
                                </Link>
                                <Link href="#!">
                                    <a>Tutors</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;