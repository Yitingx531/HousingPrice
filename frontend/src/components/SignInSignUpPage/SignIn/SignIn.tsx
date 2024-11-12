import { useState } from 'react';
import styles from './SignIn.module.css';
import {AuthError, NetworkError, APIError, handleAPIResponse} from '../../../types/errorTypes';
import { AuthResponse } from '../../../types/authResponse';
import { useNavigate } from 'react-router-dom';

type SignInFormData = {
  email: string | '',
  password: string | '',
};

const defaultFormData = {
  email: '',
  password: ''
}

const SignIn: React.FC = () => {
  const [signInFormData, setSignInFormData] = useState<SignInFormData>(defaultFormData);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const navigate = useNavigate();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;
   setSignInFormData((prevData) => ({
    ...prevData,
    [name]: value
   }))
   console.log('email', signInFormData.email)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
    const response = await fetch('http://localhost:4000/auth/signin', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signInFormData.email,
          password: signInFormData.password,
        })
    });
    console.log('response', response)
    const responseData = await handleAPIResponse<AuthResponse>(response);
    console.log('signin success',  responseData);
    navigate('/');
    } catch(error: unknown) {
      if(error instanceof AuthError){
        setErrorMsg('Invalid email or password');
        console.log(`Auth Error: ${error.message}`)
      } else if(error instanceof NetworkError){
        console.log(`Network Error: ${error.message}`)
      } else if(error instanceof APIError){
        console.log(`API Error: ${error.message}`)
      }
    }
  }

  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInCard}>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <label>Email</label> <br/>
        <input 
        placeholder='user@example.com' 
        name='email' 
        type='email' 
        value={signInFormData.email}
        onChange={handleFormChange}/><br/>
        <label>Password</label> <br/>
        <input 
        placeholder='******' 
        name='password' 
        type='password' 
        value={signInFormData.password}
        onChange={handleFormChange}/><br/>
        <button >Sign In</button>
        </form>
      </div>
      {errorMsg && 
        <p className={styles.errorMsg}>
        {errorMsg}
        </p>
      }
    </div>
  );
};

export default SignIn;