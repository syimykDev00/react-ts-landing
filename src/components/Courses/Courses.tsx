import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../animations/variant';
import { courses } from '../../data/courses';
import './Courses.css';

const Courses = () => {
    return (
        <section className='courses' id='courses'>
            <div className='container'>
                <h2>
                    Наши курсы
                </h2>
                <motion.div
                    className="courses__grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}
                >
                    {
                        courses.map(course => (
                            <motion.div
                                className="course-card"
                                variants={fadeUp}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03
                                }}
                            >
                                <h3>
                                    {course.title}
                                </h3>
                                <p>
                                    {course.description}
                                </p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}
export default Courses; 