import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.main}>
      <form className={styles.form}>
        <h1>You are not logged in</h1>
        <h3>You need to authorize your account</h3>
        <button onClick={() => navigate("/login")}>Log in</button>
        <h3>or</h3>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </form>
    </div>
    </div>
  );
};

export default Home;