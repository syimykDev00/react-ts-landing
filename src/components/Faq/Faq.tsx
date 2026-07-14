import { useState } from "react";
import { faqData } from "../../data/faq";
import { motion } from 'framer-motion';
import "./Faq.css";
import { fadeUp } from "../../animations/variant";

const FAQ = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq__header">
                    <h2>Часто задаваемые вопросы</h2>
                    <p>
                        Здесь собраны ответы на самые популярные вопросы наших
                        студентов.
                    </p>
                </div>

                <div className="faq__list">
                    {faqData.map((item) => {
                        const isOpen = activeId === item.id;

                        return (
                            <motion.div
                                className="faq__item" key={item.id}
                                variants={fadeUp}
                                whileHover={{
                                    y: -10,
                                    scale: 1.04
                                }}
                            >
                                <button
                                    className={`faq__question ${isOpen ? "active" : ""
                                        }`}
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>

                                    <span className="faq__icon">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`faq__answer ${isOpen ? "show" : ""
                                        }`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;