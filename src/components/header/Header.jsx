import React from 'react';
import styles from './Header.module.css';

const Header = ({ theme, toogleTheme }) => {
  return (
    <div className={styles.header}>
      <h1>Where in the world?</h1>
      <div className={styles.theme}>
        <i className={theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} onClick={() => toogleTheme()}></i>
        <p onClick={() => toogleTheme()}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </div>
  );
};

export default Header;
