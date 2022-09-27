import React from "react";
import styles from "./Card.module.scss";
const Card = ({ suit, value }) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Top}>
                <span>{value}</span>
                <span>{suit}</span>
            </div>
            <div className={styles.Bottom}>
                <span>{value}</span>
                <span>{suit}</span>
            </div>
        </div>
    );
};

export default Card;
