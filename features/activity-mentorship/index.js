import React from 'react';
import Image from 'next/image';
import styles from "../../styles/activitymentorship.module.scss";

const ActivityMentorship = () => {
    return (
        <div className={styles.activitymentorship}>
            <div className="container">
                <h2 className={styles.title}>Learn that new skill, launch that project,<span>land your dream career.</span></h2>
                <div className={styles.description}>
                    <p>
                        Your online mentor can elevate your career or be a shoulder to lean on. Get a personalized mentoring program, including curated study plans, regular check-ins, and unlimited actionable support. Be part of an online mentor community that spans across the globe.
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.activity}>
                            <Image src="/activity/chat-bubble.svg" width={30} height={30} alt="chat bubble" /> &nbsp;&nbsp;
                            <span className={styles.smalltext}>Chat</span>
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.subtitle}>Expert mentorship. One text away.</h3>
                            <p className={styles.subdesc}>
                                Ask questions, kick the tires on a new idea, or discuss professional progress and improvements in your online mentoring sessions with unlimited messaging.
                            </p>
                            <p className={styles.subdesc}>
                                Have an upcoming interview at Amazon? Need help in product management or marketing? Whatever it is, our online mentors are there for you.
                            </p>
                            <p className={styles.subdesc}>
                                Fewer interruptions in your day-to-day and easier documentation. A text away, get expert guidance at your convenience from your mentor.
                            </p>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.image}>
                            <Image priority src="/activity/chat-screen_2x.png" layout="fill" objectFit="contain" alt="chat screen" />
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.image}>
                            <Image priority src="/activity/conversation.png" layout="fill" objectFit="contain" alt="conversation" />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.activity}>
                            <Image src="/activity/goals-icon.svg" width={30} height={30} alt="goals" /> &nbsp;&nbsp;
                            <span className={styles.smalltext}>establish milestones</span>
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.subtitle}>Shortcut growth through expert guidance.</h3>
                            <p className={styles.subdesc}>
                                Get invaluable knowledge from veterans and founders. Through effective mentorship, eliminate the time spent on figuring out your next steps. Get an action plan, and gain wisdom from consistent mentoring sessions.
                            </p>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.picauthor}>
                                <Image src="/activity/tomray.png" width={60} height={60} alt="tomray" />
                            </div>
                            <div className={styles.word}>
                                <div className={styles.morecomment}>
                                    <p>
                                        "In just a few weeks, I feel a LOT more confident navigating the React world. Chris has been an excellent mentor."
                                    </p>
                                </div>
                                <div className={styles.nameauthor}>
                                    - Tom Ray, a React mentee.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.activity}>
                            <Image src="/activity/videochat-icon.svg" width={30} height={30} alt="video chat" /> &nbsp;&nbsp;
                            <span className={styles.smalltext}>video calls</span>
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.subtitle}>Talk it out. Face-to-face.</h3>
                            <p className={styles.subdesc}>
                                Online mentorship shouldn’t compromise genuine interactions—enter video chat.
                            </p>
                            <p className={styles.subdesc}>
                                When you’re stuck in a logjam, be it a design flaw, code defect, or business decision, skip the endless back-and-forth of essays and talk it out face-to-face with your mentor on video call.
                            </p>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.picauthor}>
                                <Image src="/activity/bassma.jpg" width={60} height={60} alt="bassma" />
                            </div>
                            <div className={styles.word}>
                                <div className={styles.morecomment}>
                                    <p>
                                        "After our sessions, I cleared interviews left and right and was actually offered three positions in Germany."
                                    </p>
                                </div>
                                <div className={styles.nameauthor}>
                                    - Bassma Hefni, a Product Design mentee.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.image}>
                            <Image priority src="/activity/bounce_ideas.png" layout="fill" objectFit="contain" alt="bounce_ideas" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityMentorship;