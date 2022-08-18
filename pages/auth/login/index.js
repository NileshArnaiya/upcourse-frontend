import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/login.module.scss";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(true);
    const [invalidPass, setInvalidPass] = useState(true);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({ message: "" });
    const [showPass, setShowPass] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setInvalidEmail(true);
        setInvalidPass(true);
        if (!email && !password) {
            setInvalidEmail(false);
            setInvalidPass(false);
            emailRef.current.focus();
            passRef.current.focus();
            setError(true);
            setErrorMessage({ message: "Incorrect username or password" })
            return;
        }
        if (!email) {
            setInvalidEmail(false);
            emailRef.current.focus();
            setError(true);
            setErrorMessage({ message: "Incorrect username or password" })
            return;
        }
        if (!password) {
            setInvalidPass(false);
            passRef.current.focus();
            setError(true);
            setErrorMessage({ message: "Incorrect username or password" })
            return;
        }
        toast.success("Congratulations login success");

        setEmail("");
        setPassword("");
    }

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.image}>
                        <Image priority src="/login/bg-login.png" layout="fill" objectFit="contain" alt="login" />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.form}>
                        {error && errorMessage ? (
                            <>
                                <div className={styles.showError}>
                                    <p>{errorMessage.message}</p>
                                </div>
                            </>
                        ) : ""}
                        <label className={styles.labelEmail}>Email address:</label>
                        <input
                            className={`${styles.inputEmail} ${invalidEmail ? "" : styles.invalidEmail}`}
                            placeholder="user123@gmail.com"
                            type="email"
                            ref={emailRef}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <label className={styles.labelPass}>Password:</label>
                        <div className={styles.wrap}>
                            <input
                                className={`${styles.inputPassword} ${invalidPass ? "" : styles.invalidPass}`}
                                placeholder="••••••••"
                                type={showPass ? "text" : "password"}
                                ref={passRef}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <div className={styles.imageEye} onClick={() => setShowPass(!showPass)}>
                                <Image src="/login/eye-pass.png" layout="fill" alt="eye pass" />
                            </div>
                        </div>
                        <Link href="#!">
                            <a className={styles.forgotPass}>Forgot password?</a>
                        </Link>
                        <button className={styles.btnLogin} onClick={handleLogin}>Login</button>
                        <ToastContainer className="toast-position"
                            position="bottom-right"
                            autoClose={10000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;