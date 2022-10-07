/**
 * Данный компонент является вспомогательным для навигации по экранам вёрстки
 * TODO: Удалить после реализации вёрстки всех экранов
 */

import React from 'react';
import {Link} from 'react-router-dom'
import './page-navigation.scss';

function PageNavigation() {
  function hideMenu(): void {
    document.querySelector('.page-navigation')?.classList.add('visually-hidden')
  }
  
  return (
    <nav className="page-navigation">
      <ul>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/">Главная</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/login">Авторизация</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/sign-up">Регистрация</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/profile">Профиль</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/change-password">Смена пароля</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/forum">Форум</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/leaders">Лидеры</Link>
        </li>
        <li className="page-navigation__item">
          <Link className="page-navigation__link" to="/round">Раунд</Link>
        </li>
      </ul>
      <svg className="page-navigation__close"
        onClick={hideMenu}
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#3B4F7D" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </nav>
  )
}

export default PageNavigation;
