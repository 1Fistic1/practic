import React from "react";
import { NavLink } from "react-router-dom";

import cl from "../footer/Footer.module.css";

import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";

const Footer = () => {
  return (
    <footer>
      <div className={cl.containerOne}>
        <div className={cl.footerLeftSide}>
          <span>
            <NavLink to="/">EL Практикум</NavLink>
          </span>
        </div>

        <div className={cl.footerRightSide}>
          <NavLink to="/">
            <img src={vk} alt="" />
          </NavLink>
          <NavLink to="/">
            <img src={telegram} alt="" />
          </NavLink>
          <NavLink to="/">Журнал</NavLink>
          <NavLink to="/">Блог</NavLink>
        </div>
      </div>

      <div className={cl.containerTwo}>
        <div className={cl.footerLefTtitles}>
          <div className={cl.footerLeftOne}>
            <NavLink to="/">Программирование</NavLink>
            <NavLink to="/">Дизайн</NavLink>
            <NavLink to="/">Менеджмент</NavLink>
          </div>
          <div className={cl.footerLeftTwo}>
            <NavLink to="/">Анализ данных</NavLink>
            <NavLink to="/">Маркетинг</NavLink>
            <NavLink to="/">Английский язык</NavLink>
          </div>
        </div>
        <div className={cl.footerLefTtitles}>
          <div className={cl.footerLeftOne}>
            <NavLink to="/">Лицензия</NavLink>
            <NavLink to="/">
              Сведения об оброзовательной <br /> сфере
            </NavLink>
            <NavLink to="/">Правила рекомендаций</NavLink>
          </div>
          <div className={cl.footerLeftTwo}>
            <NavLink to="/">Для СМИ</NavLink>
            <NavLink to="/">Правовая информация</NavLink>
            <NavLink to="/">Отзывы</NavLink>
          </div>
        </div>
        <div className={cl.footerLefTtitles}>
          <div className={cl.footerLeftOne}>
            <NavLink to="/">Корпоративным клиентам</NavLink>
            <NavLink to="/">
              Предложить стажировку или <br /> вакансию выпускникам
            </NavLink>
            <NavLink to="/">Менеджмент</NavLink>
          </div>
          <div className={cl.footerLeftTwo}>
            <NavLink to="/">
              Полная занятность в основной <br />
              команде
            </NavLink>
            <NavLink to="/">
              Частичная занятость:авторы
              <br />
              наставники, ревьюверы
            </NavLink>
          </div>
        </div>
      </div>

      <div className={cl.containerFoot}>
        <div className={cl.containerFootLeft}>
          <NavLink to="/">8 987 654 43 21</NavLink>
          <NavLink to="/">
            <span>Звонок по России бесплатный</span>
          </NavLink>
        </div>
        <div className={cl.containerFootRight}>
          <p>
            Образовательные услуги оказываются АНО ДПО «Образовательные
            технологии EL» на основании Лицензии № Л035-01298-77/00185314 от 1
            июня 2024 года. Документ о <br />
            прохождении обучения по программе дополнительного профессионального
            образования также выдается АНО ДПО «Образовательные технологии EL».{" "}
            <br />© 2024 АНО ДПО «Образовательные технологии EL», ООО «EL».
            Проект компании EL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
