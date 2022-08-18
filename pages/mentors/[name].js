import React, { useState, useEffect } from 'react';
import { getMentorDetail } from "../../utils/api/callAPI";
import { FaHome, FaAngleRight, FaClock, FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from 'next/future/image';
import styles from "../../styles/detailmentor.module.scss";
import Link from 'next/link';

const DetailMentor = ({ name }) => {
    const [mentorDetail, setMentorDetail] = useState([]);
    useEffect(() => {
        getMentorDetail(name).then((json) => {
            setMentorDetail(json.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Navbar />
            <div className={styles.detailmentor}>
                <div className="container">
                    <div className={styles.container}>
                        {mentorDetail && mentorDetail.length > 0 && mentorDetail.map((item) => (
                            <div className={styles.content} key={item.id}>
                                <div className={styles.banner}>
                                    <div className={styles.text}>
                                        <p>
                                            <i><FaHome /></i>
                                            <i><FaAngleRight /></i>
                                            <span>Find Mentor <i><FaAngleRight /></i></span>
                                            <span>{item.name}</span>
                                        </p>
                                    </div>
                                    <div className={styles.imageUser}>
                                        <Image className={styles.custom_image} priority src={item.thumbnail} alt={item.name} width={200} height={200} />
                                    </div>
                                </div>
                                <div className={styles.grid}>
                                    <div className={styles.infomation}>
                                        <div className={styles.info}>
                                            <h3>{item.name}</h3>
                                            <p>{item.service} at {item.workplace}</p>
                                            <p>{item.experience}</p>
                                        </div>
                                        <div className={styles.activity}>
                                            <span>
                                                <Link href="#!">
                                                    <a>
                                                        <IoLocationSharp />
                                                        <span>{item.city}</span>
                                                    </a>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href="#!">
                                                    <a>
                                                        <FaClock />
                                                        <span>{item.activity}</span>
                                                    </a>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href="#">
                                                    <a>
                                                        <FaCalendarCheck />
                                                        <span>{item.message}</span>
                                                    </a>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.description}>
                                        <h3>About</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.line}></div>

                                <div className={styles.skills}>
                                    <h3>Skills</h3>
                                    <div className={styles.wrap}>
                                        {item.skills.map((element, index) => (
                                            <Link href="#!" key={index}>
                                                <a>{element}</a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.line}></div>

                                <div className={styles.topics}>
                                    <h3>Topics</h3>
                                    <div className={styles.wrap}>
                                        {item.topics.map((element, index) => (
                                            <Link href="#!" key={index}>
                                                <a>{element}</a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
DetailMentor.getInitialProps = ({ query: { name } }) => {
    return { name }
}
export default DetailMentor;