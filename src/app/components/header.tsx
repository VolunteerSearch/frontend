import React from "react";
import Image from "next/image";
import "./header.css";

function Logo() {
  return (
    <span id="logo">
        <Image src="/logo.svg" alt="logo" width={240} height={60} id="logo-image" />
    </span>
  );
}

function Menu() {
  return (
    <span id="login-buttons">
      <button className="login-buttons" id="sign-in-button">
        <Image src="/account.svg" alt="account icon" width={24} height={24} />
        Log In
      </button>

      <button className="login-buttons" id="register-button">
        <Image src="/account.svg" alt="account icon" width={24} height={24} />
        Sign Up
      </button>
    </span>
  );
}

export default function Header() {
  return (
    <header id="header">
      <Logo />
      <Menu />
    </header>
  );
}