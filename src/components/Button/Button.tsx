import React, {useState} from 'react';
import styles from "./Button.module.scss";
import {cutString} from "../../utils/utils";
import {Link} from "react-router-dom";

interface ButtonProps {
    text: string;
    transparency?: boolean;
}

const Button: React.FC<ButtonProps> = ({text, transparency}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [content] = useState(cutString(text));



    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    });


    return (
        <div className={styles['button-container']}>
            <button type="button" className={`${styles.button} ${transparency ? styles.button_transparent : styles.button_color}`}>{windowWidth > 632 ? text : content}</button>
            <div className={styles.tooltip}>
                <div className={styles.tooltip__content}>
                    <span className={styles.tooltip__text}>Стань частью Legalbet и узнавай все новости первым.</span>
                    <Link className={styles.tooltip__link} to='#'>Подробнее</Link>
                </div>
            </div>

        </div>

    )
};

export default Button;