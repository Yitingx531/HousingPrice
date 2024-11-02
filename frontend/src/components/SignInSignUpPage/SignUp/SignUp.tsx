import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpCard}>
        <form action="" className={styles.signUpForm}>
          <label>Username:</label> 
          <input className={styles.signUpFormInput} placeholder="username" /> 

          <label>Email:</label> 
          <input className={styles.signUpFormInput} placeholder="example@email.com" /> 

          <label>Password:</label> 
          <input 
            type="password"
            className={styles.signUpFormInput}
            placeholder="At least 8 characters and 1 special character"
          />

          <button type="submit" className={styles.signUpFormButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
