import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../Button/Button";
import styles from './AutorizationBlock.module.scss';
import google from '../../images/goo.svg';
import fb from '../../images/fb.svg';
import mail from '../../images/mail.svg';
import ok from '../../images/ok.svg';
import tw from '../../images/tw.svg';
import vk from '../../images/vk.svg';

const AutorizationBlock = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.buttons}>
                <li className={styles.button}>
                        <Button text="Регистрация через почту"  />
                </li>
                <li className={styles.button}>
                        <Button text="Войти" transparency  />
                </li>
            </ul>
            <div className={styles['flex-container']}>
                <span className={styles.span}>или</span>
                <ul className={styles['social-links']}>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img className={styles.image} src={google} alt="Иконка Google" />
                        </Link>
                    </li>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img src={vk} alt="Иконка Вконтакте" />
                        </Link>
                    </li>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img src={mail} alt="Иконка mail" />
                        </Link>
                    </li>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img src={tw} alt="Иконка Twitter" />
                        </Link>
                    </li>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img src={fb} alt="Иконка Facebook" />
                        </Link>
                    </li>
                    <li className={styles['social-links__item']}>
                        <Link to="#" className={styles.link}>
                            <img src={ok} alt="Иконка Одноклассники" />
                        </Link>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default AutorizationBlock;