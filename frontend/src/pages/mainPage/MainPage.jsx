import React from 'react'
import Header from '../../comp/header/Header'
import { useState } from 'react';

import { NavLink } from "react-router-dom";

import cl from '../mainPage/MainPage.module.css'

import coursesOne from '../../images/coursesOne.png'
import coursesTwo from '../../images/coursesTwo.png'
import coursesFree from '../../images/coursesFree.png'
import coursesFour from '../../images/CoursesFour.png'
import coursesFive from '../../images/coursesFive.png'
import coursesSix from '../../images/coursesSix.png'
import coursesSeven from '../../images/coursesSeven.png'
import coursesEight from '../../images/coursesEight.png'
import coursesNine from '../../images/coursesNine.png'

import Footer from '../../comp/footer/Footer';

const MainPage = () => {

  const coursesDB = [
    {
      title: 'Тестирование веб-приложения',
      time: 'Понадобится ~ 10 часов',
      desc: 'Научим находить ошибки и неполадки в сервисах, проводить ручное тестирование и составлять отчёты. Тренироваться будете на веб-приложении Яндекс Метро.',
      image: coursesOne,
      enter: 'Учиться',
    }, 
    {
      title: 'Разработка на Python',
      time: 'Понадобится ~ 20 часов',
      desc: 'Напишете свой первый код на Python и создадите персонального ассистента Анфису, которая сможет здороваться, рассказывать о себе',
      image: coursesTwo,
      enter: 'Учиться',
    }, 
    {
      title: 'Основы Python и анализа данных',
      time: 'Понадобится ~ 2 часа',
      desc: 'Вы изучите базовые концепции анализа данных. Поймёте, чем занимаются аналитики и специалисты по Data Science. Решите 5 кейсов по работе с данными.',
      image: coursesFree,
      enter: 'Учиться',
    }, 
    {
      title: 'Разработка веб-страниц',
      time: 'Понадобится ~ 20 часов',
      desc: 'С помощью языков JavaScript, HTML, CSS анимируете обложку для плейлиста и создадите интерактивную веб-страницу наполненную разными интересными фишками.',
      image: coursesFour,
      enter: 'Учиться',
    }, 
    {
      title: '5 кейсов по анализу данных на Python',
      time: 'Понадобится ~ 8 часов',
      desc: 'Научим писать код на языке Python, обрабатывать и размечать сырые данные, проводить количественные исследования.',
      image: coursesFive,
      enter: 'Учиться',
    }, 
    {
      title: 'Разработка поисковой системы на C++',
      time: 'Понадобится ~ 25 часов',
      desc: 'Расскажем, как устроены поисковые системы вроде Яндекса и как создавать собственные с помощью кода на языке C++.',
      image: coursesSix,
      enter: 'Учиться',
    },
    {
      title: 'Дизайн сайта для интернет-магазина',
      time: 'Понадобится ~ 6 часов',
      desc: 'Попробуете сделать типовые задачи дизайнера интерфейсов в Figma: поработаете с главным экраном сайта, сделаете шаблон карточки в каталоге, создадите лоадер и прогресс-бар.',
      image: coursesSeven,
      enter: 'Учиться',
    }, 
    {
      title: 'Основы языка программирования Java',
      time: 'Понадобится ~ 15 часов',
      desc: 'Вы изучите базовые конструкции одного из самых популярных языков программирования и создадите своё первое приложение — трекер доходов и расходов. ',
      image: coursesEight,
      enter: 'Учиться',
    }, 
    {
      title: 'Введение в интернет-маркетинг',
      time: 'Понадобится ~ 5 часов',
      desc: 'Разберётесь, что такое путь пользователя, драйверы и барьеры — и создадите свою первую маркетинговую воронку. А ещё узнаете как строить карьеру в маркетинге и сможете придумать свою схему маркета.',
      image: coursesNine,
      enter: 'Учиться',
    },  
  ]

  const [courses, setCourses] = useState(coursesDB)

return (
  <div>
    <Header />

    <section className={cl.hero}>
      <div className={cl.container}>
        <p>1000+ учеников устроились на новую работу</p>
        <p>EL Практикум - поможем вам <br />
          трудоустроиться в новой сфере</p>
        <NavLink to='/'>Узнать свои наклонности</NavLink>
      </div>
    </section>

    <section className={cl.courses}>
    <h3>Выберите бесплатную часть</h3>
    <div className={cl.coursesLinks}>
      <NavLink to='/'>Все</NavLink>
      <NavLink to='/'>Программирование</NavLink>
      <NavLink to='/'>Аналих данных</NavLink>
      <NavLink to='/'>Маркетинг</NavLink>
      <NavLink to='/'>Дизайн</NavLink>
      <NavLink to='/'>Менеджмент</NavLink>
    </div>
      <div className={cl.container}>
        {courses.map((item) => (
          <div className={cl.coursesItem}>
            <h3>{item.title}</h3>
            <p>{item.time}</p>
            <p>{item.desc}</p>
            <img src={item.image} alt="" />
            <NavLink to='/'>{item.enter}</NavLink>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
)
}

export default MainPage


