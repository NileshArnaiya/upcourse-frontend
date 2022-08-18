import React from 'react';
import Image from 'next/image';
import styles from "../../styles/storymentor.module.scss";

const StoryMentor = () => {
    const dataCandidate = [
        {
            name: "farzad",
            thumbnail: "/candidate/farzad.jpg",
            description: "Naz is an amazing person and a wonderful mentor. She is supportive and knowledgeable with extensive practical experience. Having been a manager at Netflix, she also knows a ton about working with teams at scale. Highly recommended.",
            author: "Farzad, a management mentee."
        },
        {
            name: "rao",
            thumbnail: "/candidate/rao.jpg",
            description: "Brandon has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.",
            author: "Rao, an engineering mentee."
        },
        {
            name: "julia",
            thumbnail: "/candidate/julia.jpg",
            description: "Morgan gave me great tips, insights and brought up very important questions that led me in the right direction in my job search and in preparation for interviews.",
            author: "Julia, a product management mentee."
        },
        {
            name: "volha",
            thumbnail: "/candidate/volha.jpg",
            description: "Andrii is the best mentor I have ever met. He explains things clearly and helps to solve almost any problem. He taught me so many things about the world of Java in so a short period of time!",
            author: "Volha, a Java mentee."
        },
        {
            name: "amber",
            thumbnail: "/candidate/amber.jpg",
            description: "Greg is literally helping me achieve my dreams. I had very little idea of what I was doing – Greg was the missing piece that offered me down to earth guidance in business.",
            author: "Amber, a business mentee."
        },
        {
            name: "pierre",
            thumbnail: "/candidate/pierre.jpg",
            description: "Anna really helped me a lot. Her mentoring was very structured, she could answer all my questions and inspired me a lot. I can already see that this has made me even more successful with my agency.",
            author: "Pierre, a design mentee."
        }
    ]
    return (
        <div className={styles.storymentor}>
            <div className="container">
                <h2 className={styles.title}>Still not convinced?<span>Don’t just take our word for it</span></h2>
                <div className={styles.description}>
                    <p>
                        We’ve already delivered 1-on-1 mentorship to thousands of students, professionals, managers and executives. Even better, they’ve left an average rating of 4.9 out of 5 for our mentors.
                    </p>
                </div>
                <div className={styles.container}>
                    {dataCandidate.map((item, index) => (
                        <div className={styles.column} key={index}>
                            <div className={styles.header}>
                                <Image src={item.thumbnail} width={35} height={32} alt={item.name} />
                            </div>
                            <div className={styles.body}>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div className={styles.footer}>
                                <p>
                                    - {item.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryMentor;