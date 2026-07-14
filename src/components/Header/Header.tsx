import { useState, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { fadeDown, fadeUp, staggerContainer } from "../../animations/variant";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>('hero')

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    useEffect(() => {

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }


        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isMenuOpen]);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const handleScroll = () => {

            sections.forEach(section => {

                const top = section.offsetTop - 150;

                const height = section.offsetHeight;

                const id = section.getAttribute("id");

                if (window.scrollY >= top && window.scrollY < top + height) {

                    setActiveSection(id || "");

                }

            });

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <motion.header
            className={isScrolled ? 'header scrolled' : 'header'}
            variants={fadeDown}
            initial='hidden'
            animate='visible'

        >
            <div className="container">
                <div className="header__wrapper">
                    <motion.a
                        href="#hero"
                        className="header__logo"
                        whileHover={{
                            scale: 1.05,
                        }}
                    >
                        CodeSphere
                    </motion.a>


                    <nav className={
                        isMenuOpen
                            ? "header__nav active"
                            : "header__nav"
                    }>
                        <motion.ul
                            variants={staggerContainer}
                            initial={false}
                            animate={window.innerWidth <= 900
                                ? (isMenuOpen ? "visible" : "hidden")
                                : "visible"}
                        >

                            <motion.li variants={fadeUp}>
                                <a href="#hero"
                                    onClick={closeMenu}>
                                    Главная
                                </a>
                            </motion.li>

                            <motion.li variants={fadeUp}>
                                <a href="#courses"
                                    onClick={closeMenu}
                                    className={activeSection === 'courses' ? 'active' : ''}
                                >
                                    Курсы
                                </a>
                            </motion.li>

                            <motion.li variants={fadeUp}>
                                <a href="#advantages"
                                    onClick={closeMenu}
                                    className={activeSection === 'advantages' ? 'active' : ''}
                                >
                                    Преимущества
                                </a>
                            </motion.li>

                            <motion.li variants={fadeUp}>
                                <a href="#reviews"
                                    onClick={closeMenu}
                                    className={activeSection === 'reviews' ? 'active' : ''}
                                >
                                    Oтзывы
                                </a>
                            </motion.li>

                            <motion.li variants={fadeUp}>
                                <a href="#faq"
                                    onClick={closeMenu}
                                    className={activeSection === 'faq' ? 'active' : ''}
                                >
                                    FAQ
                                </a>
                            </motion.li>

                            <motion.li variants={fadeUp}>
                                <a href="#contact"
                                    onClick={closeMenu}
                                    className={activeSection === 'contact' ? 'active' : ''}
                                >
                                    Контакты
                                </a>
                            </motion.li>

                        </motion.ul>

                    </nav>

                    <a href="#contact">
                        <motion.button
                            className="header__button"
                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{
                                scale: .95
                            }}
                        >
                            Начать обучение
                        </motion.button>
                    </a>

                    <button
                        className={
                            isMenuOpen
                                ? "header__burger active"
                                : "header__burger"
                        }
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>

                    </button>
                </div>
            </div>
        </motion.header>
    );
};


export default Header;