import React, { useState } from 'react';
import styles from './Hamburger.module.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <main className={`${styles.main} ${isActive ? styles.overlay : ''}`}>
      <header>
        <div className={styles.menu}>
          <input
            id="hamburger"
            type="checkbox"
            checked={isActive}
            onChange={handleMenuToggle}
            className={styles.checkbox}
          />
          <label htmlFor="hamburger" className={`${styles.hamburger} ${isActive ? styles.active : ''}`}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </label>
        </div>
      </header>
      <ul className={`${styles.expanded} ${isActive ? styles.active : ''}`}>
        <li>xxxxx</li>
        <li>yyyyy</li>
        <li>zzzzz</li>
      </ul>
    </main>
  );
};

export default Navbar;
