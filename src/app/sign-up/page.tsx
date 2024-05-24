import Image from "next/image";

import Header from "@/components/header";
import styles from "./sign-up.module.css";


export default function SignInPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div id={styles.formWrapper}>
          <div id={styles.formHeaderWrapper}>
            <div id={styles.formHeader}>
              <h2>Sign Up with your email...</h2>
            </div>
          </div>
          <form id={styles.signUpForm}>
            <input type="email" placeholder="email@example.com" className={styles.formField} />
            <input type="password" placeholder="password" className={styles.formField} />
            <input type="password" placeholder="repeat password" className={styles.formField} />
            <div id={styles.buttonsWrapper}>
              <input type="submit" value="Sign up" className={styles.formField} id={styles.signUpButton} />
              <h2>... or</h2>
              <div id={styles.oAuthProvidersWrapper}>
                <button className={styles.oAuthProviderButton}>
                  <Image src="/brands/google.svg" width={32} height={32} alt="Sign up with Google" />
                </button>
                <button className={styles.oAuthProviderButton}>
                  <Image src="/brands/facebook.svg" width={32} height={32} alt="Sign up with FaceBook" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}