'use client';

import Image from 'next/image';
import { useRouter, } from 'next/navigation';

import styles from './sign-up.module.css';
import { createUser, } from './formSubmissionHandler';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState, } from 'react';

function OAuthProvidersButtons() {
  return (
    <div id={styles.oAuthProvidersWrapper}>
      <button className={styles.oAuthProviderButton}>
        <Image src="/brands/google.svg" width={32} height={32} alt="Sign up with Google" />
      </button>
      <button className={styles.oAuthProviderButton}>
        <Image src="/brands/facebook.svg" width={32} height={32} alt="Sign up with FaceBook" />
      </button>
    </div>
  );
}


function SignUpForm({setError,}: {setError: Dispatch<SetStateAction<string>>},) {
  const router = useRouter();

  const [password, setPassword,] = useState('',);
  const [confirmPassword, setConfirmPassword,] = useState('',);

  function switchHighlightPasswordFields(highlight: boolean) {
    const passwordField = document.getElementById('password',);
    const confirmPasswordField = document.getElementById('confirmPassword',);
    if (highlight) {
      passwordField?.classList.add(styles.formFieldInvalid,);
      confirmPasswordField?.classList.add(styles.formFieldInvalid,);
    } else {
      passwordField?.classList.remove(styles.formFieldInvalid,);
      confirmPasswordField?.classList.remove(styles.formFieldInvalid,);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>,) {
    event.preventDefault();
    if (confirmPassword != password) {
      return;
    }
    const formData = new FormData(event.currentTarget,);
    const success = await createUser(formData,);

    if (success) {
      router.push('/profile/create',);
    } else {
      setError('Error while logging you in',);
    }
  };

  async function handlePasswordChange(e: ChangeEvent,) {
    setPassword(e.target.value,);
    if (e.target.value === '') {
      setError('Password can not be empty',);
      return;
    }
    if (e.target.value !== confirmPassword) {
      setError('Passwords do not match',);
      switchHighlightPasswordFields(true,);
    } else {
      setError('',);
      switchHighlightPasswordFields(false,);
    }
  };

  async function handleConfirmPasswordChange(e: ChangeEvent,) {
    setConfirmPassword(e.target.value,);
    if (e.target.value === '') {
      setError('Password confirmation can not be empty',);
      return;
    }
    if (e.target.value !== password) {
      setError('Passwords do not match',);
      switchHighlightPasswordFields(true,);
    } else {
      setError('',);
      switchHighlightPasswordFields(false,);
    }
  };

  return (
    <form id={styles.signUpForm} onSubmit={handleSubmit}>
      <input type="email" placeholder="email@example.com" className={styles.formField} name="email" />
      <input type="text" placeholder="username" className={styles.formField} name="username" />
      <input type="password" placeholder="password" className={styles.formField} id="password" name="password" onChange={handlePasswordChange} />
      <input type="password" placeholder="repeat password" className={styles.formField} id="confirmPassword" name="repeat_password" onChange={handleConfirmPasswordChange} />
      <div id={styles.buttonsWrapper}>
        <input type="submit" value="Sign up" className={styles.formField} id={styles.signUpButton} disabled={password !== confirmPassword} />
        <h2>... or</h2>
        <OAuthProvidersButtons />
      </div>
    </form>
  );
}

function ErrorMessage({errorMessage,}: {errorMessage: string},) {
  return (
    <div id={styles.errorMessage}>
      <Image src="/error.svg" width={20} height={20} alt='!' />
      <p>{errorMessage}</p>
    </div>
  );
}

export default function SignUpPage() {
  const [errorMessage, setErrorMessage,] = useState('',);
  return (
    <main className={styles.main}>
      {errorMessage !== '' && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
      <div id={styles.formWrapper}>
        <div id={styles.formHeaderWrapper}>
          <div id={styles.formHeader}>
            <h2>Sign Up with your email...</h2>
          </div>
        </div>
        <SignUpForm setError={setErrorMessage} />
      </div>
    </main>
  );
}