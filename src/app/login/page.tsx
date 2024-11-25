"use client";
import { useEffect, useState } from "react";
import HeadLogin from "@/components/headLogin/HeadLogin";
import HeadRegister from "@/components/headRegister/HeadRegister";
import BottomLogin from "@/components/bottomLogin/BottomLogin";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // Состояние для переключения

  // Функция для переключения состояния
  const handleToggle = () => {
    setIsLogin((prev) => !prev); // Переключаем между Log In и Register
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div>
      {isLogin ? (
        <HeadLogin />
      ) : (
        <HeadRegister />
      )}

      {/* Передаем состояние в BottomLogin */}
      <BottomLogin isLogin={isLogin} onToggle={handleToggle} />
    </div>
  );
}
