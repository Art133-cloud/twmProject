import { motion, AnimatePresence } from "framer-motion";
import Container from "../basic/container/Container";
import BottomImage from "../../../public/assets/png/loginImage.png";
import Image from "next/image";
import LoginComponent from "../loginComponent/LoginComponent";
import RegisterComponent from "../registerComponent/RegisterComponent";
import styles from "./BottomLogin.module.scss";

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export default function BottomLogin({ isLogin, onToggle }: { isLogin: boolean, onToggle: (state: boolean) => void }) {
  return (
    <Container>
      <div className={styles.contentBottomLogin}>
        <div className={styles.loginImg}>
          <Image src={BottomImage.src} alt="LoginImage" width={1024} height={682} />
        </div>
        <div className={styles.componentLogin}>
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <LoginComponent onToggle={() => onToggle(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <RegisterComponent onToggle={() => onToggle(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
}
