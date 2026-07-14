import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { ContactForm } from "../../types/contact";
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../animations/variant';
import './Contact.css';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactForm>()


    const onSubmit: SubmitHandler<ContactForm> = (data) => {
        console.log(data)
        toast.success('Заявка успешно отправлена!')
        reset();
    }

    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='contact__content'>
                    <motion.div
                        className='contact__info'
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className='contact__subtitle'>
                            CONTACT US
                        </span>
                        <h2>Начните свой путь в IT уже сегодня</h2>
                        <p>
                            Заполните форму, и наш менеджер свяжется с вами,
                            поможет подобрать курс и ответит на все вопросы.
                        </p>
                    </motion.div>
                    <motion.form
                        className='contact__form'
                        onSubmit={handleSubmit(onSubmit)}
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className='contact__field'>
                            <input
                                type="text"
                                placeholder='Ваше имя'
                                {...register('name', {
                                    required: "Введите имя",
                                    minLength: {
                                        value: 2,
                                        message: 'Минимум 2 символа'
                                    }
                                })}
                            />
                            {errors.name && (
                                <span className='error'>
                                    {errors.name.message}
                                </span>
                            )}


                            <input
                                type="email"
                                placeholder='Email'
                                {...register('email', {
                                    required: 'Введите Email',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Некорректный Email"
                                    }
                                })}
                            />
                            {errors.email && (
                                <span className='error'>
                                    {errors.email.message}
                                </span>
                            )}

                        </div>
                        <div className='contact__field'>
                            <input
                                type="tel"
                                placeholder="Телефон"
                                {...register("phone", {
                                    required: "Введите телефон",
                                    minLength: {
                                        value: 10,
                                        message: "Минимум 10 цифр"
                                    }
                                })}
                            />

                            {errors.phone && (
                                <span className="error">
                                    {errors.phone.message}
                                </span>
                            )}

                            <select
                                defaultValue=''
                                {...register('course', {
                                    required: 'Выберите курс'
                                })}
                            >
                                <option value="" disabled>Выберите курс</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="uiux"> UI / UX</option>
                            </select>
                            {errors.course && (
                                <span className='error'>
                                    {errors.course.message}
                                </span>
                            )}

                        </div>

                        <textarea
                            rows={6}
                            placeholder="Сообщение"
                            {...register("message", {
                                required: "Введите сообщение",
                                minLength: {
                                    value: 10,
                                    message: "Минимум 10 символов"
                                }
                            })}
                        />
                        {errors.message && (
                            <span className="error">
                                {errors.message.message}
                            </span>
                        )}

                        <motion.button
                            type='submit'
                            whileHover={{
                                scale: 1.03
                            }}
                            whileTap={{
                                scale: .96
                            }}
                        >
                            Отправить заявку
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
export default Contact; 