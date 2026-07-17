import React from 'react';
import { teachers } from '../../data/teachers';
import './Teachers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'

import {motion} from 'framer-motion';
import { fadeUp } from '../../animations/variant';


const Teachers = () => {
    return (
        <section className='teachers'>
            <div className='container'>
                <h2>Наши преподаватели</h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    navigation
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {teachers.map((teacher) => (
                        <SwiperSlide key={teacher.id}>
                            <motion.div 
                            className='teacher-card' key={teacher.id}
                            variants={fadeUp}
                            whileHover={{
                                y: -10,
                                scale: 1.04
                            }}
                            >
                                <img src={teacher.image} alt={teacher.name} />
                                <h3>{teacher.name}</h3>
                                <p>{teacher.position}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Teachers;