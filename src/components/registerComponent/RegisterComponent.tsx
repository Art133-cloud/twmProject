import styles from "./RegisterComponent.module.scss";
import YourName from "../../../public/assets/svg/YourName";
import PasswordLogin from "../../../public/assets/svg/PasswordLogin";
import EmailLogin from "../../../public/assets/svg/EmailLogin";
interface AuthComponentProps {
    onToggle: () => void;
}
export default function RegisterComponent({ onToggle }: AuthComponentProps ) {
    return (
        <div className={styles.registerComponent}>
            <form>
                <h2>Create your account</h2>
                <div className={styles.inputs}>
                    <div className={styles.yourName}><YourName /></div>
                    <div className={styles.email}><EmailLogin /></div>
                    <div className={styles.password}><PasswordLogin /></div>
                    <div className={styles.confirmPassword}><PasswordLogin /></div>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email address" required />
                    <input type="password" placeholder="Your password" required />
                    <input type="password" placeholder="Confirm Password" required />
                </div>
                <div className={styles.acceptTerms}>
                    <input type="checkbox" id="Terms" />
                    <label htmlFor="Terms">Accept Terms and Conditions</label>
                </div>
                <button>Register</button>
                <p>Already have an account? <span onClick={onToggle}>Login</span></p>
            </form>
        </div>
    );
}
