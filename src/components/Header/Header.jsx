import style from './Header.module.scss';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Search from './Search';
import Logo from './Logo';
import { RiCloseLargeFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [burger, setBurger] = useState(false);
  const handleToggleSearch = () =>
    setVisibleSearch((visibleSearch) => !visibleSearch);
  const handleToggleBurger = () => setBurger((burger) => !burger);
  return (
    <>
      <header className={style.header}>
        <div className={style.header__wrapper}>
          <Logo />
          <ul
            className={`${style.contact} ${
              burger ? style['contact-active'] : ''
            }`}
          >
            <li>
              <a href="mailto:info-ua.com">info-ua@com</a>
            </li>
            <li>
              <a href="tel:666666">i6666666</a>
            </li>
          </ul>
        </div>
        {visibleSearch ? (
          <div className={style['header__search-block']}>
            <input
              type="text"
              placeholder="Search.."
              
            />
            <button onClick={handleToggleSearch}>
              <MdOutlineClose />
            </button>
          </div>
        ) : (
          <button onClick={handleToggleSearch}>
            <Search />
          </button>
        )}
        <button className={style.humburger} onClick={handleToggleBurger}>
          {burger ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </button>
      </header>
      <nav
        className={`${style.links} ${burger ? style['active-links'] : ''}`}
      >
        <ul>
            <li><a href="/">О нас</a></li>
            <li><a href="/">Флот</a></li>
            <li><a href="/">Инвесторам</a></li>
            <li><a href="/">Карьера</a></li>
            <li><a href="/">Пресс-центр</a></li>
            <li><a href="/">Устойчивое развитие</a></li>
            <li><a href="/">Контакты</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
