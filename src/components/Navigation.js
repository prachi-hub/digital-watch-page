import React from "react";
import styles from '../App.module.css';

const Navigation = () => {
    return (
        <header className="App-header">
            <nav className={styles.topNav}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="website logo" />
            </nav>
        </header>
    )
}

export default Navigation;