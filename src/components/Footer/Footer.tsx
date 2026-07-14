import React from 'react';
import './Footer.css';
import {motion} from 'framer-motion';
import { fadeUp } from '../../animations/variant';

const Footer = () => {
    return (
        <motion.footer 
        className='footer'
        variants={fadeUp}
        initial="hidden"
        whileInView='visible'
        viewport={{once: true}}
        >
            <div className='container'>
                <div className='footer__top'>
                    <div className='footer__about'>
                        <a href="#hero" className='footer__logo'>
                            CodeSphere
                        </a>
                        <p>
                            Изучайте современные технологии, создавайте реальные проекты,
                            совершенствуйте свои навыки и начинайте карьеру в IT
                            вместе с опытными наставниками.
                        </p>

                    </div>
                    <div className='footer__links'>
                        <h3>Навигация</h3>
                        <ul>
                            <li><a href="#hero">Главная</a></li>

                            <li><a href="#courses">Курсы</a></li>

                            <li><a href="#advantages">Преимущества</a></li>

                            <li><a href="#statistics">Статистика</a></li>

                            <li><a href="#reviews">Отзывы</a></li>

                            <li><a href="#faq">Вопросы</a></li>
                        </ul>
                    </div>
                    <div className='footer__links'>
                        <h3>Курсы</h3>
                        <ul>
                            <li><a href="/">Frontend</a></li>

                            <li><a href="/">Backend</a></li>

                            <li><a href="/">UI / UX</a></li>

                            <li><a href="/">Mobile</a></li>

                            <li><a href="/">Cyber Security</a></li>
                        </ul>
                    </div>
                    <div className='footer__contact'>
                        <h3>Contact</h3>

                        <p>Bishkek, Kyrgyzstan</p>

                        <p>+996 700 123 456</p>

                        <p>codesphere@gmail.com</p>
                    </div>
                </div>

                <div className="footer__bottom">

                    <p>
                        © 2026 CodeSphere Academy. All rights reserved.
                    </p>

                </div>
            </div>
        </motion.footer>
    )
}
export default Footer; 