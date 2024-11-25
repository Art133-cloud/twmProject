"use client";
import { useState } from "react";
import styles from "./HeadLogin.module.scss";
import BottomLogin from "../bottomLogin/BottomLogin";
import LinearLogo from "../../../public/assets/svg/LinearLogoHome";
import Container from "../basic/container/Container";

export default function HeadLogin() {
  const [isLogin, setIsLogin] = useState(true);

  // Функция для переключения состояния
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <div className={styles.parentDiv}>
        <div className={styles.contentHeadLogin}>
          {/* Логотип */}
          <div className={styles.logo}>
            <LinearLogo />
          </div>

          {/* Кнопки переключения */}
          <div className={styles.btnsHead}>
            <button
              className={isLogin ? styles.activeButton : ""}
              onClick={() => setIsLogin(true)} // Прямо меняем на true для Log In
            >
              Log In
            </button>
            <button
              className={!isLogin ? styles.activeButton : ""}
              onClick={() => setIsLogin(false)} // Прямо меняем на false для Register
            >
              Register
            </button>
          </div>
        </div>
        {/* Передаем состояние и функцию в BottomLogin */}
        {/* <BottomLogin isLogin={isLogin} onToggle={handleToggle} /> */}
      </div>
    </Container>
  );
}
