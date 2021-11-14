import React from 'react';
import styles from './Main.module.css';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.blue}>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <div className={styles.left}>
                            <button>JobHunt</button>
                            <button>Find Jobs</button>
                            <button>Upskill Yourself</button>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
