import React from "react";
import styles from './Logo.module.css';

function Logo(){
    return(
        <div>
            <img className={styles.Logo} src={require('../../../assets/logo/logo.png')} alt="logo" />
        </div>

        

    );
}

export default Logo;