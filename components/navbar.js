import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const router = useRouter();
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image src="/logo/logo1.svg" width={40} height={40} objectFit="contain" alt="logo" />

                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="#!">
                                <a>Find a Mentor</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#!">
                                <a>For Businesses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#!">
                                <a>Book a Session</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.right}>
                        <button className={styles.btn} onClick={() => router.push("/mentors")}>Get Started</button>
                        <div className={styles.btnLogin} onClick={() => router.push("/auth/login")}>Login</div>
                    </div>
                    {show ? (
                        <div className={styles.subnav}>
                            <ul className={styles.list}>
                                <li>
                                    <Link href="#!">
                                        <a>Find a Mentor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>For Businesses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <a>Book a Session</a>
                                    </Link>
                                </li>
                            </ul>
                            <div className={styles.btns}>
                                <button className={styles.btn} onClick={() => router.push("/mentors")}>Get Started</button>
                                <div className={styles.btnLogin} onClick={() => router.push("/auth/login")}>Login</div>
                            </div>
                        </div>
                    ) : ""}
                    <div className={styles.burgers} onClick={() => setShow(!show)}>
                        {show ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;