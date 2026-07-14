import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from "../../animations/variant";
import './Reviews.css';
import { reviews } from '../../data/reviews';

const Reviews = () => {
    return (
        <section className='reviews' id='reviews'>
            <div className='container'>
                <h2>Отзывы студентов</h2>
                <motion.div
                    className='reviews__grid'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {reviews.map((review) => (
                        <motion.div
                            className='review-card' key={review.id}
                            variants={fadeUp}
                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                        >
                            <h6>⭐⭐⭐⭐⭐</h6>
                            <h3>{review.name}</h3>
                            <span>{review.role}</span>
                            <p className='review-text'>{review.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Reviews;