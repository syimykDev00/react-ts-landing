import React from 'react';
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variant";
import "./Advantages.css";

const advantages: string[] = [
    "Практические проекты",
    "Опытные наставники",
    "Помощь с карьерой",
    "Современные технологии"
]

const Advantages = () => {
    return (
        <section className='advantages' id='advantages'>
            <div className='container'>
                <h2>
                    Почему мы?
                </h2>
                <motion.div
                    className='advantages__grid'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {
                        advantages.map((item, index) => (
                            <motion.div
                                className='advantages-card' key={index}
                                variants={fadeUp}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                    transition: { duration: .25 }
                                }}
                            >
                                <h3>0{index + 1}</h3>
                                <p>{item}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}
export default Advantages; 