import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <button>JobHunt</button>
                <button>Find Jobs</button>
                <button>Upskill Yourself</button>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}

export default Navbar
