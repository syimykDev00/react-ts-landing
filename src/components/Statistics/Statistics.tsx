import React from 'react';
import { statistic } from '../../data/statistics';
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variant";
import './Statistics.css';

const Statistics = () => {
    return (
        <section className='statistics' id='statistics'>
            <div className='container'>
                <motion.div
                    className='statistics__grid'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {statistic.map((item) => (
                        <motion.div
                            className='statistics-card' key={item.id}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                y: -8
                            }}
                        >
                            <h3>{item.number}</h3>
                            <p>{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Statistics; 