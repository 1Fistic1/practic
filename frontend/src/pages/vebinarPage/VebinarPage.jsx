import React from 'react'
import Header from '../../comp/header/Header'
import Footer from '../../comp/footer/Footer';
import { useState } from 'react';

import { NavLink } from "react-router-dom";

import cl from '../vebinarPage/VebinarPage.module.css'

import coursesOne from '../../images/coursesOne.png'
import coursesFive from '../../images/coursesFive.png'
import coursesSeven from '../../images/coursesSeven.png'

const VebinarPage = () => {

    const vebinarDB = [
        {
            image: coursesOne,
            title: 'Практический вебинар по HTML/CSS',
            info: 'В этом курсе вы научитесь работать с HTML и CSS. Сделаете свой первый сайт',
            enter: 'Перейти'
        },
        {
            image: coursesFive,
            title: 'Практический вебинар по Python',
            info: 'В этом курсе вы научитесь писать код на языке программирования Python.',
            enter: 'Перейти'
        },
        {
            image: coursesSeven,
            title: 'Практический вебинар по UX/UI',
            info: 'В этом курсе вы поймете что такое UX/UI дизайн и сделаете свой мини макет',
            enter: 'Перейти'
        },
        {
            image: coursesOne,
            title: 'Практический вебинар по HTML/CSS',
            info: 'В этом курсе вы научитесь работать с HTML и CSS. Сделаете свой первый сайт',
            enter: 'Перейти'
        },
        {
            image: coursesOne,
            title: 'Практический вебинар по HTML/CSS',
            info: 'В этом курсе вы научитесь работать с HTML и CSS. Сделаете свой первый сайт',
            enter: 'Перейти'
        },
        {
            image: coursesOne,
            title: 'Практический вебинар по HTML/CSS',
            info: 'В этом курсе вы научитесь работать с HTML и CSS. Сделаете свой первый сайт',
            enter: 'Перейти'
        },
    ]

    const [vebinar, setVebinars] = useState(vebinarDB)

    return (
        <div>
            <Header />
            <section className={cl.vebinars}>
                    <h3>Предлагаем вам к просмотру несколько бесплатных вебинаров</h3>
                    <div className={cl.container}>
                    {vebinar.map((item) => (
                        <div className={cl.cardItem}>
                            <img src={item.image} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                            <NavLink to='https://www.youtube.com/watch?v=Bmtu5eNnjK8'>{item.enter}</NavLink>
                        </div>
                    ))} 
                    </div>
            </section>

            <Footer />
        </div>
    )
}

export default VebinarPage
