'use client';

import Image from 'next/image';

import styles from './sign-in.module.css';
import { signIn, } from './formSubmissionHandler';


function OAuthProvidersButtons() {
  return (
    <div id={styles.oAuthProvidersWrapper}>
      <button className={styles.oAuthProviderButton}>
        <Image src="/brands/google.svg" width={32} height={32} alt="Sign in with Google" />
      </button>
      <button className={styles.oAuthProviderButton}>
        <Image src="/brands/facebook.svg" width={32} height={32} alt="Sign in with FaceBook" />
      </button>
    </div>
  );
}


function SignInForm() {
  return (
    <form id={styles.signInForm} action={signIn}>
      <input type="email" placeholder="email@example.com" className={styles.formField} />
      <input type="password" placeholder="password" className={styles.formField} />
      <div id={styles.buttonsWrapper}>
        <input type="submit" value="Sign In" className={styles.formField} id={styles.signInButton} />
        <h2>... or</h2>
        <OAuthProvidersButtons />
      </div>
    </form>
  );
}


export default function SignInPage() {
  return (
    <main className={styles.main}>
      <div id={styles.formWrapper}>
        <div id={styles.formHeaderWrapper}>
          <div id={styles.formHeader}>
            <h2>Sign In with your email...</h2>
          </div>
        </div>
        <SignInForm />
      </div>
    </main>
  );
}