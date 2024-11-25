import styles from "./LoginComponent.module.scss";
import EmailLogin from "../../../public/assets/svg/EmailLogin";
import PasswordLogin from "../../../public/assets/svg/PasswordLogin";
import Google from "../../../public/assets/png/google.png";
import Facebook from "../../../public/assets/png/Facebook.png";
import Image from "next/image";
interface AuthComponentProps {
    onToggle: () => void;
}
export default function LoginComponent({ onToggle }: AuthComponentProps) {
    return (
        <div className={styles.contentLoginComponent}>
            <form>
                <h2>Login into your account</h2>
                <div className={styles.inputsLogin}>
                    <div className={styles.emailIcon}><EmailLogin /></div>
                    <div className={styles.passwordIcon}><PasswordLogin /></div>
                    <input type="email" placeholder="Your Email address" required/>
                    <input type="password" placeholder="Your password" required/>
                </div>
                <div className={styles.forgotAndRemember}>
                    <div className={styles.rememberMe}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <p>Forgot your Password?</p>
                </div>
                <button>Log In</button>
                <div className={styles.registerNewAccount}>
                    <p>Don't have an account? <span onClick={onToggle}>Register</span></p>
                </div>
                <div className={styles.signInWithBrowsers}>
                    <p>Or, Sign in with your social account</p>
                    <a href="#" className={styles.google}>
                        <Image 
                            src={Google.src}
                            alt="Google"
                            width={44}
                            height={44}
                        />
                        <p> Sign in with Google</p>
                    </a>
                    <a href="#" className={styles.facebook}>
                        <Image 
                            src={Facebook.src}
                            alt="Facebook"
                            width={44}
                            height={44}
                        />
                        <p> Sign in with Facebook</p>
                    </a>
                </div>
            </form>
        </div>
    );
}
