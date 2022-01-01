import React from "react";
import styles from '../App.module.css';

const ProductPreview = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div>
            <img src={props.currentPreviewImg} alt="product preview" />

            {
                props.showHeartBeatSection ?
                    <div className={styles.HeartBeatIcon}>
                        <i className="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                :
                <div className={styles.TimeSection}>
                <p>{`${currentHour}:${currentMinutes}`}</p>
            </div>
            }  
        </div>
    )
}

export default ProductPreview;