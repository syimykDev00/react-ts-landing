import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../animations/variant';
import "./Hero.css";

const Hero = () => {
    return (
        <motion.section
            className='hero'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            id='hero'>
            <div className="hero__blur hero__blur--one"></div>
            <div className="hero__blur hero__blur--two"></div>
            <div className='container'>
                <motion.div
                    className='hero__content'
                    variants={fadeLeft}
                >
                    <div className='hero__info'>
                        <h1>
                            Учись IT.
                            <br />
                            Создавай будущее.
                        </h1>
                        <p>
                            Современная IT-академия,
                            где ты изучишь разработку
                            и создашь реальные проекты.
                        </p>
                        <div className='hero-buttons'>
                            <a href="#contact">
                                <motion.button
                                    className='hero-btn'
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Начать обучение
                                </motion.button>
                            </a>
                            <a href="#courses">
                                <motion.button
                                    className='secondary'
                                    whileHover={{
                                        scale: 1.05
                                    }}

                                    whileTap={{
                                        scale: 0.95
                                    }}
                                >
                                    Наши курсы
                                </motion.button>
                            </a>
                        </div>
                    </div>
                    <motion.div
                        className='hero__image'
                        variants={fadeRight}
                    >
                        <div className='hero-card'>
                            <h3>
                                Frontend
                            </h3>
                            <p>
                                React + TypeScript
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
export default Hero;

