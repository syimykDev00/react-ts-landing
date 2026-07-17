import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        };
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            <a href="#hero">
                <button style={{fontSize: '25px'}}
                    className={visible ? 'scroll-top active' : 'scroll-top'}
                >
                   ↑
                </button>
            </a>
        </>
    )
}
export default ScrollToTop;