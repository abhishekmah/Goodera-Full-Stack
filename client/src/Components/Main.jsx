import React from 'react';
import styles from './Main.module.css';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.blue}>
                    <div className={styles.box}>
                        <Navbar />
                        <br />
                        <br />
                        <h1>Find Your Dream Job</h1>
                        <p>
                            Browse through thousands of full-time or part-time
                            jobs near you
                        </p>
                    </div>
                </div>
                <div className={styles.searchBox}>
                    <div>
                        <input type="text" placeholder="" />
                    </div>
                    <div>
                        <select name="select location" id=""></select>
                    </div>
                    <button>Search</button>
                </div>
                <div className={styles.jobs}>
                    {/* <br /> */}
                    <div className={styles.jobsBox}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
