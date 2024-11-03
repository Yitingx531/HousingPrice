import { useState } from 'react';
import styles from './SignUp.module.css';
import UserDataType from '../../../types/userDataType';
import emailValidator from '../../../utils/emailValidator';
import passwordValidator from '../../../utils/passwordValidator';

const defaultUserData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUp = () => {
  const [userFormData, setUserFormData] = useState<UserDataType>(defaultUserData);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [confirmPwErrorMsg, setConfirmPwErrorMsg] = useState<string>('');

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name] : value
    })
    // clear specific error message when user starts typing in that field
    if (name === 'email') setEmailErrorMsg('');
    if (name === 'password') setPasswordErrorMsg('');
    if (name === 'confirmPassword') setConfirmPwErrorMsg('');
  }

  //TODO: add user email check in database//
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
    setConfirmPwErrorMsg('');

    // Validate email
    if (!emailValidator(userFormData.email)) {
      setEmailErrorMsg('Please enter a valid email.');
      hasError = true;
    }

    // Validate password
    if (!passwordValidator(userFormData.password)) {
      setPasswordErrorMsg(
        'Password must be at least 16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      hasError = true;
    }

    // Validate password match
    if (userFormData.password !== userFormData.confirmPassword) {
      setConfirmPwErrorMsg('Passwords do not match.');
      hasError = true;
    }

    // Stop form submission if there are validation errors
    if (hasError) return;

    try{
    const response = await fetch('http://localhost:4000/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userFormData.username,
        email: userFormData.email,
        password: userFormData.password,
      })
    });
    if (!response.ok) {
      throw new Error('Failed to sign up');
    }
    const data = await response.json();
    console.log('User signed up successfully:', data);
    // set the user data back to default
    setUserFormData(defaultUserData);
  } catch(error) {
    console.log(error,'Error signing up. Please try again later.');
  }
}

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpCard}>
        <form action="" className={styles.signUpForm} onSubmit={handleSubmit}>

          <label>Username:</label> 
          <input className={styles.signUpFormInput} 
          name='username'
          value={userFormData.username}
          placeholder="username" 
          onChange={handleUserData}
          /> 

          <label>Email:</label> 
          <input className={styles.signUpFormInput} 
          name='email'
          value={userFormData.email}
          placeholder="example@email.com" 
          onChange={handleUserData}
          /> 
          {emailErrorMsg && <p className={styles.errorMessage}>{emailErrorMsg}</p>}

          <label>Password:</label> 
          <input 
            name='password'
            value={userFormData.password}
            type="password"
            className={styles.signUpFormInput}
            placeholder="password"
            onChange={handleUserData}
          />
          {passwordErrorMsg && <p className={styles.errorMessage}>{passwordErrorMsg}</p>}

          <label>Confirm Password:</label> 
          <input 
            name='confirmPassword'
            value={userFormData.confirmPassword}
            type="password"
            className={styles.signUpFormInput}
            placeholder="confirm password"
            onChange={handleUserData}
          />
          {confirmPwErrorMsg && <p className={styles.errorMessage}>{confirmPwErrorMsg}</p>}
          <button type="submit" className={styles.signUpFormButton}>Sign Up</button>

        </form>
      </div>
    </div>
  )};

export default SignUp;
