import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <button
                    className={styles.btn}
                    style={{ marginLeft: -25, marginRight: -20 }}
                >
                    JobHunt
                </button>
                <button className={styles.btn}>Find Jobs</button>
                <button className={styles.btn}>Upskill Yourself</button>
            </div>
            <div className={styles.right}>
                <button className={styles.btn}>
                    <Link to="/post">Post a Job</Link>
                </button>
                <button className={styles.btn}>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
