import React, { useContext } from 'react';
import googleImage from '../../assets/googleImage.png';
import styles from './LoginPage.module.css';

export default function LoginPage() {

    const googleLogin = () => {
        window.open("https://o-auth-backend.herokuapp.com/auth/google", "_self");
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>
            </div>
        </div>
    )
}