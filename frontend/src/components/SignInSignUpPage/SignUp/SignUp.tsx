import { useState } from 'react';
import styles from './SignUp.module.css';
import UserDataType from '../../../types/userDataType';
import validateForm from '../validateForm';

type ApiError = {
  message: string;
  statusCode?: number;
};

const defaultUserData: UserDataType = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [userFormData, setUserFormData] = useState<UserDataType>(defaultUserData);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [confirmPwErrorMsg, setConfirmPwErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setUserFormData({ ...defaultUserData });
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
    setConfirmPwErrorMsg('');
  };

  const clearErrors = () => {
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
    setConfirmPwErrorMsg('');
    setSuccessMsg('');
  };

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear specific error message when user starts typing in that field
    if (name === 'email') setEmailErrorMsg('');
    if (name === 'password') setPasswordErrorMsg('');
    if (name === 'confirmPassword') setConfirmPwErrorMsg('');
    // Clear success message when user starts modifying the form again
    if (successMsg) setSuccessMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    clearErrors();
    setIsSubmitting(true);

    // Validate form fields
    const errors = validateForm(userFormData);
    if (Object.keys(errors).length > 0) {
      setEmailErrorMsg(errors.email || '');
      setPasswordErrorMsg(errors.password || '');
      setConfirmPwErrorMsg(errors.confirmPassword || '');
      setIsSubmitting(false);
      return;
    }

    try {
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

      const data = await response.json();

      if (!response.ok) {
        const errorData = data as ApiError;
        
        if (response.status === 409 || errorData.message?.toLowerCase().includes('email already exists')) {
          setEmailErrorMsg('An account with this email already exists. Please sign in instead.');
          return;
        }
        
        throw new Error(errorData.message || 'Failed to sign up');
      }

      // Success case
      resetForm();
      setSuccessMsg('User signed up successfully!');
      
    } catch (error) {
      console.error('Signup error:', error);
      if (!emailErrorMsg) {
        setEmailErrorMsg('Error signing up. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpCard}>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <label>Username:</label> 
          <input 
            className={styles.signUpFormInput} 
            name='username'
            value={userFormData.username}
            placeholder="username" 
            onChange={handleUserData}
            required
            disabled={isSubmitting}
          /> 

          <label>Email:</label> 
          <input 
            className={styles.signUpFormInput} 
            name='email'
            type="email"
            value={userFormData.email}
            placeholder="example@email.com" 
            onChange={handleUserData}
            required
            disabled={isSubmitting}
          /> 
          {emailErrorMsg && <p className={styles.errorMessage}>{emailErrorMsg}</p>}

          <label>Password:</label> 
          <input 
            name='password'
            type="password"
            value={userFormData.password}
            className={styles.signUpFormInput}
            placeholder="password"
            onChange={handleUserData}
            required
            disabled={isSubmitting}
          />
          {passwordErrorMsg && <p className={styles.errorMessage}>{passwordErrorMsg}</p>}

          <label>Confirm Password:</label> 
          <input 
            name='confirmPassword'
            type="password"
            value={userFormData.confirmPassword}
            className={styles.signUpFormInput}
            placeholder="confirm password"
            onChange={handleUserData}
            required
            disabled={isSubmitting}
          />
          {confirmPwErrorMsg && <p className={styles.errorMessage}>{confirmPwErrorMsg}</p>}
          
          <button 
            type="submit" 
            className={styles.signUpFormButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {successMsg && <p className={styles.successMsg}>{successMsg}</p>}
      </div>
    </div>
  );
};

export default SignUp;