"use client";
import styles from "./navbar.module.css";
import Logo from "./Logo";
// import NavLinks from "./NavLinks";
import NavActions from "./NavActions";


export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Logo />
      {/* <NavLinks /> */}
      <NavActions />
    </header>
  );
}