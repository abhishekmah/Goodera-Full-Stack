import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.btn} style={{marginLeft: -25,marginRight: -20}}>JobHunt</div>
                <div className={styles.btn}>Find Jobs</div>
                <div className={styles.btn}>Upskill Yourself</div>
            </div>
            <div className={styles.right}>
                <div className={styles.btn}>Post a Job</div>
                <div className={styles.btn}>Sign in</div>
            </div>
        </div>
    );
};

export default Navbar;
