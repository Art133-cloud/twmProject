"use client";
import { useState } from "react";
import styles from "./HeadRegister.module.scss";
import Container from "../basic/container/Container";
import Logo from "../../../public/assets/svg/Logo"
export default function HeadRegister() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container>
        <div className={styles.contentHeadRegister}>
            <div className={styles.logo}>
                <Logo fill="#ff715b" fillText="#000" />
            </div>
            <div className={styles.btnsHead}>
            <button
                className={isLogin ? styles.activeButton : ""}
                onClick={() => setIsLogin(true)} 
            >
                Log In
            </button>
            <button
                className={!isLogin ? styles.activeButton : ""}
                onClick={() => setIsLogin(false)} 
            >
                Register
            </button>
            </div>
        </div>
    </Container>
  );
}