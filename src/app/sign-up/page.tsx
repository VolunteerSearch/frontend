'use client';

import Image from 'next/image';
import { useRouter, } from 'next/navigation';

import Header from '../../components/header';
import styles from './sign-up.module.css';
import { createUser, } from './formSubmissionHandler';
import { FormEvent, } from 'react';


export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>,) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget,);
    const success = await createUser(formData,);

    if (success) {
      router.push('/profile/create',);
    } else {
      // router.push("#");
      alert('Error',);
    }
  };

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
          <form id={styles.signUpForm} onSubmit={handleSubmit}>
            <input type="email" placeholder="email@example.com" className={styles.formField} name="email" />
            <input type="text" placeholder="username" className={styles.formField} name="username" />
            <input type="password" placeholder="password" className={styles.formField} name="password" />
            <input type="password" placeholder="repeat password" className={styles.formField} name="repeat_password" />
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